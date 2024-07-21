#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;
// use solana_program::program_pack::Pack;
// use spl_token_lending::state::Reserve;
// use anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;
// // use anchor_lang::system_program;
// use crate::state::{ Vault};
// use crate::constants::{VAULT_SEED};

// use::crate::state::{Lottery, Round};
use crate::constants::{ MASTER_LOTTERY_SEED, LOTTERY_SEED, ROUND_SEED};
use crate::instructions::f_init_lottery::FLottery;
use crate::instructions::f_init_solwin::FMasterLottery;
// use crate::instructions::f_init_round::FRoundStatus;


/*
 * At the moment consider:
 * MasterLottery -> x Lottery -> one Vault/strat + n rounds
 */
pub fn f_init_round(ctx: Context<FInitRound>) -> Result<()> {
    let clock = Clock::get()?;

    let lottery = &mut ctx.accounts.lottery;
    let round = &mut ctx.accounts.round;

    // Initialize the last round id (this one)
    lottery.last_round_id += 1;
    // Initialize the round
    round.id = lottery.last_round_id;
    round.authority = ctx.accounts.authority.key();
    round.lottery_id = lottery.id;
    round.ticket_price = lottery.ticket_price;
    round.last_ticket_id = 0;
    // start time: current timestamp
    round.start_time = clock.unix_timestamp;
    round.close_target = round.start_time + lottery.round_duration;
    // @todo implement choosen method (degresive, progressive, the min)
    round.min_close_time = round.close_target - (lottery.round_close_slot / 2);
    round.max_close_time = round.close_target + (lottery.round_close_slot / 2);
    round.status = FRoundStatus::Open;

    msg!("Round initialized with id : {}", round.id);
    msg!("Ticket price : {}", round.ticket_price);
    msg!("Last ticket id : {}", round.last_ticket_id);
    msg!("Authority : {}", round.authority);
    
    Ok(())
}

// later when multi lottery: add in seeds id of lottery...
// CAREFUL AT AUTHORITY, it will be the lottery authority!
#[derive(Accounts)]
pub struct FInitRound<'info> {
    #[account(
        init,
        payer = authority,
        space = 8 + 4 + 32 + 4 + 8 + 4 + 8 + 8 + 8 + 8 + 4 + 32,
        seeds = [ROUND_SEED, &(lottery.last_round_id + 1).to_le_bytes()],
        bump,
    )]
    pub round: Account<'info, FRound>,
    //   #[account(
    //     mut,
    //     seeds = [MASTER_LOTTERY_SEED],
    //     bump,
    // )]
    // pub master_lottery: Account<'info, MasterLottery>,
    #[account(
        mut,
        // seeds = [LOTTERY_SEED, &(master_lottery.last_lottery_id).to_le_bytes()],
        // bump,
    )]
    pub lottery: Account<'info, FLottery>,

    // !! ?? risk to block close to inti a new round
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}
// To clean, remove unnecessary elements
#[account]
pub struct FRound {
    pub id: u32,
    pub authority: Pubkey,
    pub lottery_id: u32,
    pub ticket_price: u64,
    pub last_ticket_id: u32,
    pub start_time: i64,
    pub close_target: i64,
    pub min_close_time: i64,
    pub max_close_time: i64,
    pub status: FRoundStatus,
    pub winner_id: Option<u32>, // to be updated when round is closed
    // pub winner_key: Pubkey, // to be updated when round is closed
    // pub last_ticket_id: u32,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Debug, PartialEq)]
pub enum FRoundStatus {
    Init, // default is ? first or null ? TO CHECK!!!
    Open,
    Finished,
    Closed,   
}