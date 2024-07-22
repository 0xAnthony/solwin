#![allow(clippy::result_large_err)]

use rand::Rng;
use rand::rngs::StdRng;
use rand::SeedableRng;
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
use crate::constants::{ LOTTERY_SEED, ROUND_SEED, TICKET_SEED, USER_SEED};
use crate::instructions::f_init_lottery::FLottery;
use crate::errors::LotteryError;
use crate::instructions::f_init_round::{f_init_round, FInitRound, FRound, FRoundStatus};
use crate::instructions::f_deposit_and_mint::{UserData};
use crate::instructions::f_take_ticket::{FTicket};

// not used at the moment
// use crate::helpers::xorshift::generate_xorshift64_f64;

// fn generate_random_number(clock: &Clock) -> u32 {
//     let mut rng = rand::thread_rng();
//     // Générer un nombre aléatoire basé sur l'horodatage et slot
//     let seed = (clock.unix_timestamp, clock.slot);
//     rng.seed_from_u64(seed.0 as u64 + seed.1 as u64);
//     rng.gen_range(0..u32::MAX) // Générer un nombre aléatoire entre 0 et u32::MAX
// }

// caller of the function should be a user to get rewards
pub fn f_close_round(ctx: Context<FCloseRound>, lottery_id: u32, round_id: u32) -> Result<()> {
    let clock = Clock::get()?;
    
    let program_id = ctx.program_id;

    let lottery = &mut ctx.accounts.lottery;
    let round = &mut ctx.accounts.round;
        if round.status != FRoundStatus::Open {
        return err!(LotteryError::RoundNotOpen);
    }
round.status = FRoundStatus::Closed;
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
    // if round_clone.status != FRoundStatus::Open {
    //     return err!(LotteryError::RoundNotOpen);
    // }

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
   
//    let random_num =((u64::from_le_bytes(
//             <[u8; 8]>::try_from(&hash(&clock.unix_timestamp.to_be_bytes()).to_bytes()[..8])
//                 .unwrap(),
//         ) * clock.slot)
//             % u32::MAX as u64) as u32;

    // let mut rng = rand::thread_rng();
    // // Générer un nombre aléatoire basé sur l'horodatage et slot
    // let seed = (clock.unix_timestamp, clock.slot);
    // rng.seed_from_u64(seed.0 as u64 + seed.1 as u64);
    // let random_num = rng.gen_range(0..u32::MAX); // Générer un nombre aléatoire entre 0 et u32::MAX
   
    let seed = (clock.unix_timestamp, clock.slot);
    let seed_value = seed.0 as u64 + seed.1 as u64;

       let mut seed_array = [0u8; 32]; // Créer un tableau de 32 octets initialisé à 0
    seed_array[..8].copy_from_slice(&seed_value.to_le_bytes()); // Remplacer les 8 premiers octets par la valeur de la semence

    // Initialisez StdRng avec le tableau de semence
    let mut rng = StdRng::from_seed(seed_array);

    let random_num = rng.gen_range(0..u32::MAX);
   
    // let random_num = generate_random_number(&clock);
    // random_num btw 0 and 1, use it to get the winner from 1 to last_ticket_id
    // let winner_id = (random_num * last_ticket_id as f64) as u32;
    let winner_ticket_id = (random_num % last_ticket_id) + 1;
    round_clone.winner_id = Some(winner_ticket_id);
    round_clone.reward = lottery.ticket_price * winner_reward_ratio;  
    // round_clone.winner_id = winner_id;
    // close round
    round_clone.status = FRoundStatus::Closed;


    // ADD REWARD LOGIC (get fees from vault, transfert to user vault, etc)

    // CASE of USING sb VRF in 2 steps (request-reveal) : handle a failing request
    // SHOULD HAVE 2 functions when VRF ok (one for the 'callback')
    // display round status, round & lottery id, winner_id,// reward
    match round_clone.winner_id {
        Some(winner_ticket_id) => {
            msg!("Round closed with id: {}, winner ticket id: {}", round_clone.id, winner_ticket_id);
        },
        None => {
            msg!("Round closed with id: {}, no winner, error requesting vrf", round_clone.id);
     
        }
    }

    // LOCIG CAHNGED => claim reward by checking ticket id and winner id of round
    // then giving reward of round reward
    // get ticket account to get winner pubkey and access user_data of the winner to add reward
//     let winner_ticket_seeds = &[TICKET_SEED, &winner_ticket_id.to_le_bytes()];
//     let (winner_ticket_address, _bump) = Pubkey::find_program_address(winner_ticket_seeds, &program_id);
//     let winner_ticket = Account::<FTicket>::try_from(&winner_ticket_address.to_account_info()).map_err(|_| LotteryError::WinnerTicketNotFound)?;
//     let winner_pubkey = winner_ticket.authority;


// // @todo PB WITH user_data need its key
//     let winner_data_seeds = &[USER_SEED, &lottery.id.to_le_bytes(), &winner_pubkey.key().as_ref()];
//     let (winner_data_address, _bump) = Pubkey::find_program_address(winner_data_seeds, &program_id);
//     let winner_user_data = Account::<UserData>::try_from(&winner_data_address.to_account_info()).map_err(|_| LotteryError::WinnerDataNotFound)?;

//     winner_user_data.rewards += lottery.ticket_price * winner_reward_ratio; 

    // INIT A NEW ROUND

    // let round_seeds = &[ROUND_SEED, &(ctx.accounts.lottery.last_round_id + 1).to_le_bytes()];
    // let (round_address, round_bump) = Pubkey::find_program_address(round_seeds, ctx.program_id);
    
    // let init_round_context = FInitRound {
    //     round: Account::try_from(&round_address.to_account_info()).map_err(|_| LotteryError::RoundCreationFailed)?,
    //     lottery: ctx.accounts.lottery.clone(),
    //     authority: ctx.accounts.authority.clone(),
    //     system_program: ctx.accounts.system_program.clone(),
    // };

    // // @todo manage case of func call twice if vrf failed
    // let init_round_context = FInitRound {
    //     round: ctx.accounts.next_round,
    //     lottery: ctx.accounts.lottery.clone(),
    //     authority: ctx.accounts.authority.clone(),
    //     system_program: ctx.accounts.system_program.clone(),
    // };

    // // let context = Context::new(
    // //     ctx.program_id,
    // //     init_round_context,
    // //     &ctx.accounts.authority,
    // //     &ctx.accounts.lottery,
    // //     &ctx.accounts.system_program,
    // // );

    // // Initialiser un nouveau round
    // f_init_round('_, '_, '_, '_,init_round_context).map_err(|_| LotteryError::RoundCreationFailed)?;

    let next_round = &mut ctx.accounts.next_round;
    // Créer un tableau d'AccountInfo
    // let accounts: &[AccountInfo] = &[
    //     next_round_account.to_account_info(),
    //     ctx.accounts.lottery.to_account_info(),
    //     ctx.accounts.authority.to_account_info(),
    //     ctx.accounts.system_program.to_account_info(),
    // ];
    // let mut accounts: Vec<AccountInfo> = vec![
    //     next_round_account.to_account_info(),
    //     ctx.accounts.lottery.to_account_info(),
    //     ctx.accounts.authority.to_account_info(),
    //     ctx.accounts.system_program.to_account_info(),
    // ];
    // CHEKC THAT next_round.id is round.id + 1 !!!
//    let next_round_ctx = Context::new(
//         ctx.program_id,
//         accounts,
//         _accounts,
//         FInitRound {
//             round: next_round_account.clone(),
//             lottery: ctx.accounts.lottery.clone(),
//             authority: ctx.accounts.authority.clone(),
//             system_program: ctx.accounts.system_program.clone(),
//         },
//     );
    // let next_round_ctx = Context::new(
    //     ctx.program_id,
    //     &mut accounts as &mut [_], // Passer une référence mutable ici
    //     &mut accounts as &mut [_], // Passer une autre référence mutable ici si nécessaire
    //     FInitRound {
    //         round: next_round_account.clone(),
    //         lottery: ctx.accounts.lottery.clone(),
    //         authority: ctx.accounts.authority.clone(),
    //         system_program: ctx.accounts.system_program.clone(),
    //     },
    // );

    //     // Appeler la fonction pour initialiser le prochain round
    // f_init_round(next_round_ctx)?;
    

    lottery.last_round_id += 1;
    // Initialize the round
    next_round.id = lottery.last_round_id;
    next_round.authority = ctx.accounts.authority.key();
    next_round.lottery_id = lottery.id;
    next_round.ticket_price = lottery.ticket_price;
    next_round.last_ticket_id = 0;
    // start time: current timestamp
    next_round.start_time = clock.unix_timestamp;
    next_round.close_target = next_round.start_time + lottery.round_duration;
    // @todo implement choosen method (degresive, progressive, the min)
    next_round.min_close_time = next_round.close_target - (lottery.round_close_slot / 2);
    next_round.max_close_time = next_round.close_target + (lottery.round_close_slot / 2);
    next_round.status = FRoundStatus::Open;

    msg!("Round initialized with id : {}", next_round.id);
    msg!("Ticket price : {}", next_round.ticket_price);
    msg!("Last ticket id : {}", next_round.last_ticket_id);
    msg!("Authority : {}", next_round.authority);

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
    // @todo manage case of vrf failing to be sure to close round and open new one
    #[account(
        init_if_needed,  
        payer = authority,
        space = 8 + 4 + 32 + 4 + 8 + 4 + 8 + 8 + 8 + 8 + 4 + 32 + 8,
        seeds = [ROUND_SEED, &(lottery.last_round_id + 1).to_le_bytes()],
        bump,
    )]
    pub next_round: Account<'info, FRound>,
}


