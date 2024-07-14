#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;
use solana_program::program_pack::Pack;
use spl_token_lending::state::Reserve;
use anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;
use anchor_lang::system_program;
use crate::state::{SolwinVault, Vault};



pub fn withdraw(ctx: Context<Withdraw>, amount: u64) -> Result<()> {
    let vault = &mut ctx.accounts.vault;
    let user = &mut ctx.accounts.user;

    // require!(vault.balance >= amount, BankError::InsufficientFunds);

    // Transfer SOL from vault to user
    **vault.to_account_info().try_borrow_mut_lamports()? -= amount;
    **user.to_account_info().try_borrow_mut_lamports()? += amount;

    // vault.balance -= amount;
    Ok(())
}


    
#[derive(Accounts)]
pub struct Withdraw<'info> {
    #[account(mut, seeds = [b"vault17"], bump)]
    pub vault: Account<'info, Vault>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}
