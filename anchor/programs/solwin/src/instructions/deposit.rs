#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;
// use solana_program::program_pack::Pack;
// use spl_token_lending::state::Reserve;
use anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;
use anchor_lang::system_program;
use crate::state::{ Vault};
// use crate::errors::{VaultError};
use crate::constants::{VAULT_SEED};



pub fn deposit(ctx: Context<Deposit>, amount: u64) -> Result<()> {
    // let vault = &mut ctx.accounts.vault;
    // let user = &mut ctx.accounts.user;
        
    // Check user has enough SOL
    // require!(**user.to_account_info().lamports.borrow() >= amount, BankError::InsufficientUserFunds);


    let cpi_context = CpiContext::new(
        ctx.accounts.system_program.to_account_info(),
        system_program::Transfer {
            from: ctx.accounts.user.to_account_info(),
            to: ctx.accounts.vault.to_account_info(),
        },
    );
    system_program::transfer(cpi_context, amount)?;

    // vault.balance += amount;
    msg!("Deposited {} lamports into the vault", amount);
    Ok(())
}


#[derive(Accounts)]
pub struct Deposit<'info> {
    #[account(mut, seeds = [VAULT_SEED], bump)]
    pub vault: Account<'info, Vault>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}