#![allow(clippy::result_large_err)]

use {
    anchor_lang::prelude::*,
    anchor_spl::{
        associated_token::AssociatedToken,
        token::{ burn, Burn, Mint, Token, TokenAccount},
    },
    anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL,
};
// use solana_program::program_pack::Pack;
// use spl_token_lending::state::Reserve;
// use anchor_lang::system_program;
use crate::state::{ FVault};
use crate::constants::{TOKEN_MINT_SEED, VAULT_SEED};
use crate::instructions::f_deposit_and_withdraw::{UserData};



pub fn f_burn_and_withdraw(ctx: Context<FBurnAndWithdraw>, amount: u64) -> Result<()> {

    // @todo add balance & account check!!


    let user_data = &mut ctx.accounts.user_data;

    // case of user who had bought token and not or partially deposited SOL
    if user_data.credits < amount {
        user_data.credits = 0;
    } else {
        user_data.credits -= amount;
    }

    // Token
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
        amount,
    )?;

    // Vault
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
pub struct FBurnAndWithdraw<'info> {
    // Vault
    #[account(mut,
        seeds = [VAULT_SEED, &lottery.id.to_le_bytes()], bump
    )]
    pub vault: Account<'info, FVault>,
    #[account(mut)]
    pub user: Signer<'info>,
    // pub system_program: Program<'info, System>,
    // user can have bought liqSOl on 2nd market and want to swap to SOL
    #[account( 
       init_if_needed,
        payer = user,
        space = 8 + 8 + 8 + 32,
        seeds = [USER_SEED, &lottery.id.to_le_bytes(), signer.key().as_ref()], 
        bump)]
    pub user_data: Account<'info, UserData>,

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
    pub payer_mint_ata: Account<'info, TokenAccount>,//origin
    #[account(mut)]
    pub payer: Signer<'info>,
    pub rent: Sysvar<'info, Rent>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
}
