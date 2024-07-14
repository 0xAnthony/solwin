#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;
use {
    anchor_spl::{
        associated_token::AssociatedToken,
        token::{mint_to, Mint, MintTo, Token, TokenAccount},
    },
};
// use solana_program::program_pack::Pack;
// use spl_token_lending::state::Reserve;
use anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;
use anchor_lang::system_program;
use crate::state::{ Vault};
// use crate::errors::{VaultError};
use crate::constants::{VAULT_SEED, TOKEN_MINT_SEED};



pub fn deposit_and_mint(ctx: Context<DepositAndMint>, amount: u64) -> Result<()> {
    // let vault = &mut ctx.accounts.vault;
    // let user = &mut ctx.accounts.user;
        
    // Check user has enough SOL
    // require!(**user.to_account_info().lamports.borrow() >= amount, BankError::InsufficientUserFunds);

    // Deposit SOL to vault

    let cpi_context = CpiContext::new(
        ctx.accounts.system_program.to_account_info(),
        system_program::Transfer {
            from: ctx.accounts.user.to_account_info(),
            to: ctx.accounts.vault.to_account_info(),
        },
    );
    system_program::transfer(cpi_context, amount)?;

    // Mint equiv amount of token
      let seeds = &[TOKEN_MINT_SEED, &[ctx.bumps.mint]]; //"mint".as_bytes()
        let signer = [&seeds[..]];

        mint_to(
            CpiContext::new_with_signer(
                ctx.accounts.token_program.to_account_info(),
                MintTo {
                    authority: ctx.accounts.mint.to_account_info(),
                    to: ctx.accounts.payer_mint_ata.to_account_info(),//destination
                    mint: ctx.accounts.mint.to_account_info(),
                },
                &signer,
            ),
            amount,
        )?;

    // vault.balance += amount;
    msg!("Deposited {} lamports into the vault", amount);
    Ok(())
}


#[derive(Accounts)]
pub struct DepositAndMint<'info> {
    // Vault
    #[account(mut, seeds = [VAULT_SEED], bump)]
    pub vault: Account<'info, Vault>,
    #[account(mut)]
    pub user: Signer<'info>, // repeat payer
    // pub system_program: Program<'info, System>,

    // Token
    #[account(
        mut,
        seeds = [TOKEN_MINT_SEED],
        bump,
        mint::authority = mint,
    )]
    pub mint: Account<'info, Mint>,
    #[account(
        init_if_needed,
        payer = payer,
        associated_token::mint = mint,
        associated_token::authority = payer,
    )]
    pub payer_mint_ata: Account<'info, TokenAccount>, //destination
    #[account(mut)]
    pub payer: Signer<'info>,
    pub rent: Sysvar<'info, Rent>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
}    

