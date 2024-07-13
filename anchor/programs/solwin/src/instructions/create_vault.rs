#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;
use solana_program::program_pack::Pack;
use spl_token_lending::state::Reserve;
use anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;
use anchor_lang::system_program;
use crate::state::{SolwinVault};


  pub fn create_vault(ctx: Context<CreateVault>) -> Result<()> {
        msg!("Starting create_solwin_vault instruction");

        // let solwin_vault = &mut ctx.accounts.solwin_vault;        
        // msg!("Solwin vault created with bump: {}", solwin_vault.bump);

        msg!("Solwin vault created");
        Ok(())
  }


  // SOLWINVAULT ACCOUNT
#[derive(Accounts)]
pub struct CreateVault<'info> {
    #[account(
        init,
        payer = user,
        space = 8,
        seeds = [b"solwin_vault12"],  // on devnet : don't forget to change the seed !
        bump
    )]
    pub solwin_vault: Account<'info, SolwinVault>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}