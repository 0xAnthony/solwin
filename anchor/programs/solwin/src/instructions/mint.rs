#![allow(clippy::result_large_err)]
use {
    anchor_lang::prelude::*,
    anchor_spl::{
        associated_token::AssociatedToken,
        token::{mint_to, Mint, MintTo, Token, TokenAccount},
    },
};
use crate::constants::{TOKEN_MINT_SEED};
    pub fn mint_tokens(ctx: Context<MintTokens>, quantity: u64) -> Result<()> {
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
            quantity,
        )?;

        Ok(())
    }





#[derive(Accounts)]
pub struct MintTokens<'info> {
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

