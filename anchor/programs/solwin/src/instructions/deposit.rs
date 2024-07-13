#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;
use solana_program::program_pack::Pack;
use spl_token_lending::state::Reserve;
use anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;
use anchor_lang::system_program;
use crate::state::{SolwinVault};
use crate::errors::{VaultError};


  pub fn deposit_to_vault(ctx: Context<DepositToVault>, amount: u64) -> Result<(), > {
        let cpi_context = CpiContext::new(
            ctx.accounts.system_program.to_account_info(),
            system_program::Transfer {
                from: ctx.accounts.user.to_account_info(),
                to: ctx.accounts.solwin_vault.to_account_info(),
            },
        );
        // let res = system_program::transfer(cpi_context, amount)?;

        // if res.is_ok() {
        //     msg!("Deposited {} lamports into the vault", amount);
        //     return Ok(());
        // } else {
        //     return err!(VaultError::TransferFailed);
        // }
        // let result = || -> Result<(), InError> {
        //     system_program::transfer(cpi_context, amount)?;
        //     msg!("Deposited {} lamports into the vault", amount);
        //     Ok(())
        // };

        // if let Err(_err) = result() {
        //     err!(VaultError::TransferFailed)
        // }
       
         system_program::transfer(cpi_context, amount)?;
            msg!("Deposited {} lamports into the vault", amount);
            Ok(())
  }

  #[derive(Accounts)]
pub struct DepositToVault<'info> {
    #[account(mut, seeds = [b"solwin_vault12"], bump)]
    pub solwin_vault: Account<'info, SolwinVault>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}