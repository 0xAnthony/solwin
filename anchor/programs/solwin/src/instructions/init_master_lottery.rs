#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;
// use solana_program::program_pack::Pack;
// use spl_token_lending::state::Reserve;
// use anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;
// // use anchor_lang::system_program;
// use crate::state::{ Vault};
use crate::constants::{MASTER_LOTTERY_SEED};


/*
 * At the moment consider:
 * MasterLottery -> x Lottery -> one Vault/strat + n rounds
 */
pub fn initialize_master_lottery(ctx: Context<InitializeMasterLottery>) -> Result<()> {
    // last_lottery_id -> 0
    let master_lottery = &mut ctx.accounts.master_lottery;
    master_lottery.last_lottery_id = 0;

    Ok(())
}

// perharps to merge with first lottery initialization (with init_if_needed)
#[derive(Accounts)]
pub struct InitializeMasterLottery<'info> {
    #[account(
        init,
        payer = payer,
        space = 8 + 4,
        seeds = [MASTER_LOTTERY_SEED],
        bump,
    )]
    pub master_lottery: Account<'info, MasterLottery>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct MasterLottery {
    pub last_lottery_id: u32,
}