#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;
use solana_program::program_pack::Pack;
use spl_token_lending::state::Reserve;
use anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;
use anchor_lang::system_program;
use crate::state::{SolwinVault};



pub fn withdraw(ctx: Context<Withdraw>, amount: u64) -> Result<()> {
        **ctx
            .accounts
            .solwin_vault
            .to_account_info()
            .try_borrow_mut_lamports()? -= amount;
        **ctx
            .accounts
            .user
            .to_account_info()
            .try_borrow_mut_lamports()? += amount;

        msg!("Withdrew {} lamports from the vault", amount);
        Ok(())
  }

#[derive(Accounts)]
pub struct Withdraw<'info> {
    #[account(mut, seeds = [b"solwin_vault"], bump)]
    pub solwin_vault: Account<'info, SolwinVault>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}