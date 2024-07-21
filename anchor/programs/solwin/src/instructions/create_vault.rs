#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;
// use solana_program::program_pack::Pack;
// use spl_token_lending::state::Reserve;
use anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;
// use anchor_lang::system_program;
use crate::state::{ Vault};
use crate::constants::{VAULT_SEED};



pub fn initialize_bank(ctx: Context<InitializeBank>) -> Result<()> {
    let vault = &mut ctx.accounts.vault;
    vault.sol_balance = 0;
    Ok(())
}



#[derive(Accounts)]
pub struct InitializeBank<'info> {
    #[account(init, payer = user, space = 8 + 8 + 8, seeds = [VAULT_SEED], bump)]
    pub vault: Account<'info, Vault>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

