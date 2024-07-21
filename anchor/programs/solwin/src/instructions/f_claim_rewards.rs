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
use crate::errors::RewardError;



pub fn f_claim_rewards(ctx: Context<ClaimRewards>) -> Result<()> {

    // @todo add balance & account check!!

    let user = &ctx.accounts.user;
    let user_data = &mut ctx.accounts.user_data;

    if user_data.owner != *user.key {
        return err!(RewardError::NotUserDataOWner);
    }
    // case of user who had bought token and not or partially deposited SOL
    let reward_amount = user_data.reward;
    user_data.reward = 0;

    // MOCK LENDING INTEREST, looking for solution to connect to protocols on devnet

    // @todo make a mint function instead of the same code duplicated
    // Token
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
        reward_amount,
    )?;


    Ok(())
}


    
#[derive(Accounts)]
pub struct ClaimRewards<'info> {
    // Vault
    // #[account(mut,
    //     seeds = [VAULT_SEED, &lottery.id.to_le_bytes()], bump
    // )]
    // pub vault: Account<'info, FVault>,
    // @todo check seed!! as in take_ticket & withdraw too!
    #[account(mut)]
    pub lottery: Account<'info, FLottery>,
    #[account(mut)]
    pub user: Signer<'info>,
    // pub system_program: Program<'info, System>,
    // user can have bought liqSOl on 2nd market and want to swap to SOL
    #[account( 
        mut,
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
