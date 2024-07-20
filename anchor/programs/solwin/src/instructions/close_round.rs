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
use crate::constants::{ LOTTERY_SEED, ROUND_SEED};
use crate::instructions::init_lottery::Lottery;
use crate::errors::LotteryError;
use crate::instructions::init_round::Round;
use crate::instructions::init_round::RoundStatus;
use crate::helpers::xorshift::generate_xorshift64_f64;



pub fn close_round(ctx: Context<CloseRound>, lottery_id: u32, round_id: u32) -> Result<()> {
    let clock = Clock::get()?;
    
    let lottery = &mut ctx.accounts.lottery;
    let round = &mut ctx.accounts.round;

    let mut round_clone = ctx.accounts.round.clone();

    // check id of lottery and round match the one of pdas:
    if lottery.id != lottery_id {
        return err!(LotteryError::InvalidLotteryId);
    }
    if round_clone.id != round_id {
        return err!(LotteryError::InvalidRoundId);
    }

    // check round status is Open
    if round_clone.status != RoundStatus::Open {
        return err!(LotteryError::RoundNotOpen);
    }

    // check timestamp > min_close_time
    if clock.unix_timestamp < round_clone.min_close_time  {
        return err!(LotteryError::RoundNotCloseable);
    }

    // calcultate reward of closer according to close_slot
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
    round_clone.status = RoundStatus::Closed;


    // ADD REWARD LOGIC (get fees from vault, transfert to user vault, etc)


    // display round status, round & lottery id, winner_id,// reward
    match round_clone.winner_id {
        Some(winner_id) => {
            msg!("Round closed with id: {}, winner id: {}", round_clone.id, winner_id);
        },
        None => {
            msg!("Round closed with id: {}, no winner yet", round_clone.id);
     
        }
    }

    Ok(())
}


#[derive(Accounts)]
pub struct CloseRound<'info> {
    #[account(mut)]
    pub lottery: Account<'info, Lottery>,
    #[account(mut)]
    pub round: Account<'info, Round>,
    pub system_program: Program<'info, System>,
}


