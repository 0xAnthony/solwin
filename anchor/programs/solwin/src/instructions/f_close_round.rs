#![allow(clippy::result_large_err)]

use anchor_lang::{
    prelude::*,
    solana_program::{hash::hash, },
};
// use solana_program::program_pack::Pack;
// use spl_token_lending::state::Reserve;
// use anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;
// // use anchor_lang::system_program;
// use crate::state::{ Vault};
// use crate::constants::{VAULT_SEED};

// use::crate::state::{Lottery, Round};
use crate::constants::{ LOTTERY_SEED, ROUND_SEED, USER_SEED};
use crate::instructions::f_init_lottery::FLottery;
use crate::errors::LotteryError;
use crate::instructions::f_init_round::{f_init_round, FInitRound, FRound, FRoundStatus};
use crate::instructions::f_deposit_and_mint::{UserData};
// not used at the moment
// use crate::helpers::xorshift::generate_xorshift64_f64;


// caller of the function should be a user to get rewards
pub fn f_close_round(ctx: Context<FCloseRound>, lottery_id: u32, round_id: u32) -> Result<()> {
    let clock = Clock::get()?;
    
    let program_id = ctx.program_id;

    let lottery = &mut ctx.accounts.lottery;
    let round = &mut ctx.accounts.round;

    let mut round_clone = ctx.accounts.round.clone();
    let signer = &ctx.accounts.signer;

    let closer_data = &mut ctx.accounts.closer_data;

    if closer_data.owner != *signer.key {
        return err!(LotteryError::NotUserDataOWner);
    }
    // check id of lottery and round match the one of pdas:
    if lottery.id != lottery_id {
        return err!(LotteryError::InvalidLotteryId);
    }
    if round_clone.id != round_id {
        return err!(LotteryError::InvalidRoundId);
    }

    // check round status is Open
    if round_clone.status != FRoundStatus::Open {
        return err!(LotteryError::RoundNotOpen);
    }

    // check timestamp > min_close_time
    if clock.unix_timestamp < round_clone.min_close_time  {
        return err!(LotteryError::RoundNotCloseable);
    }

    // TEMP (till looking for solution to connect to lending protocol)
    // MOCKING these interest by minting token
    // interest => reward => arbitrary temporary choice: 1/2 ticket price
    let closer_reward_ratio = 1 / 4;
    let winner_reward_ratio = 3 / 4;

    closer_data.rewards += lottery.ticket_price * closer_reward_ratio;

    // @todo ADD REWARD COMPUTATION OF CLOSER:
    // max reward at target (round start + duration)
    // min boosted reward at target +- 1/2 close_slot (ponder side needed, ie ahead or late in round cycle)
    // then only 5% if out of the slot
    // if clock.unix_timestamp < round_clone.min_close_time || clock.unix_timestamp > round_clone.max_close_time {
    // }

    // get last_id of ticket from round to pick a winner
    let last_ticket_id = round_clone.last_ticket_id;
    // call generate_xorshift64_f64 with as seed :
    // timestamp modulo last_ticket_id
    // to get a random number between 1 and last_ticket_id:
    // let random_num = generate_xorshift64_f64(clock.unix_timestamp);
   
   let random_num =((u64::from_le_bytes(
            <[u8; 8]>::try_from(&hash(&clock.unix_timestamp.to_be_bytes()).to_bytes()[..8])
                .unwrap(),
        ) * clock.slot)
            % u32::MAX as u64) as u32;
    // random_num btw 0 and 1, use it to get the winner from 1 to last_ticket_id
    // let winner_id = (random_num * last_ticket_id as f64) as u32;
    let winner_id = (random_num % last_ticket_id) + 1;
    round_clone.winner_id = Some(winner_id);

    // round_clone.winner_id = winner_id;
    // close round
    round_clone.status = FRoundStatus::Closed;


    // ADD REWARD LOGIC (get fees from vault, transfert to user vault, etc)

    // CASE of USING sb VRF in 2 steps (request-reveal) : handle a failing request
    // SHOULD HAVE 2 functions when VRF ok (one for the 'callback')
    // display round status, round & lottery id, winner_id,// reward
    match round_clone.winner_id {
        Some(winner_id) => {
            msg!("Round closed with id: {}, winner id: {}", round_clone.id, winner_id);
        },
        None => {
            msg!("Round closed with id: {}, no winner, error requesting vrf", round_clone.id);
     
        }
    }

// @todo PB WITH user_data need its key
    let winner_seeds = &[USER_SEED, &winner_id.to_le_bytes()];
    let (winner_data_address, _bump) = Pubkey::find_program_address(winner_seeds, &program_id);
    let winner_user_data = Account::<UserData>::try_from(&winner_data_address).map_err(|_| LotteryError::WinnerDataNotFound)?;

    winner_user_data.rewards += lottery.ticket_price * winner_reward_ratio; 

    // INIT A NEW ROUND

    let round_seeds = &[ROUND_SEED, &(ctx.accounts.lottery.last_round_id + 1).to_le_bytes()];
    let (round_address, round_bump) = Pubkey::find_program_address(round_seeds, ctx.program_id);
    
    let init_round_context = FInitRound {
        round: Account::try_from(&round_address).map_err(|_| LotteryError::RoundCreationFailed)?,
        lottery: ctx.accounts.lottery.clone(),
        authority: ctx.accounts.authority.clone(),
        system_program: ctx.accounts.system_program.clone(),
    };

    let context = Context::new(
        ctx.program_id,
        init_round_context,
        &ctx.accounts.authority,
        &ctx.accounts.lottery,
        &ctx.accounts.system_program,
    );

    // Initialiser un nouveau round
    f_init_round(context)?;

    Ok(())
}


#[derive(Accounts)]
pub struct FCloseRound<'info> {
    #[account(mut)]
    pub lottery: Account<'info, FLottery>,
    #[account(mut)]
    pub round: Account<'info, FRound>,
    pub system_program: Program<'info, System>,
    #[account( 
        mut,
        seeds = [USER_SEED, &lottery.id.to_le_bytes(), signer.key().as_ref()], 
        bump)]
    pub closer_data: Account<'info, UserData>,
    // SOhuld'nt be a user !!! => remove
    #[account(mut)]
    pub authority: Signer<'info>,
    pub signer: Signer<'info>,

}


