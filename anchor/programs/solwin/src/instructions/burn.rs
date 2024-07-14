#![allow(clippy::result_large_err)]
use {
    anchor_lang::prelude::*,
    anchor_spl::{
        associated_token::AssociatedToken,
        token::{ burn, Burn, Mint, Token, TokenAccount},
    },
};
use crate::constants::{TOKEN_MINT_SEED};


pub fn burn_tokens(ctx: Context<BurnTokens>, quantity: u64) -> Result<()> {
    let seeds = &[TOKEN_MINT_SEED, &[ctx.bumps.mint]];
    let signer = [&seeds[..]];

    burn(
        CpiContext::new_with_signer(
        ctx.accounts.token_program.to_account_info(),
            Burn {
                authority: ctx.accounts.payer.to_account_info(),
                from: ctx.accounts.payer_mint_ata.to_account_info(), //origin
                mint: ctx.accounts.mint.to_account_info(), //spl_token_mint
            },
            &signer,
        ),
        quantity,
    )?;

    Ok(())
}





#[derive(Accounts)]
pub struct BurnTokens<'info> {
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
    pub payer_mint_ata: Account<'info, TokenAccount>,//origin
    #[account(mut)]
    pub payer: Signer<'info>,
    pub rent: Sysvar<'info, Rent>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
}

