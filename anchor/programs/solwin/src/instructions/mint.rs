#![allow(clippy::result_large_err)]
use {
    anchor_lang::prelude::*,
    anchor_spl::{
        associated_token::AssociatedToken,
        token::{mint_to, Mint, MintTo, Token, TokenAccount},
    },
};
// use anchor_lang::prelude::*;
// use solana_program::program_pack::Pack;
// use spl_token_lending::state::Reserve;
// use anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;
use anchor_lang::system_program;

use crate::state::{SolwinVault};

// pub fn mint_token(ctx: Context<MintToken>, amount: u64) -> Result<()> {
//     msg!("Minting tokens to associated token account...");
//     msg!("Mint: {}", &ctx.accounts.mint_account.key());
//     msg!(
//         "Token Address: {}",
//         &ctx.accounts.associated_token_account.key()
//     );

//     // Invoke the mint_to instruction on the token program
//     mint_to(
//         CpiContext::new(
//             ctx.accounts.token_program.to_account_info(),
//             MintTo {
//                 mint: ctx.accounts.mint_account.to_account_info(),
//                 to: ctx.accounts.associated_token_account.to_account_info(),
//                 authority: ctx.accounts.mint_authority.to_account_info(),
//             },
//         ),
//         amount * 10u64.pow(ctx.accounts.mint_account.decimals as u32), // Mint tokens
//     )?;

//     msg!("Token minted successfully.");

//     Ok(())
// }

// #[derive(Accounts)]
// pub struct MintToken<'info> {
//     #[account(mut)]
//     pub mint_authority: Signer<'info>,

//     pub recipient: SystemAccount<'info>,
//     #[account(mut)]
//     pub mint_account: Account<'info, Mint>,
//         // pub mint_account: Account<'info, SolwinVault>,

//     #[account(
//         init_if_needed,
//         payer = mint_authority,
//         associated_token::mint = mint_account,
//         associated_token::authority = recipient,
//     )]
//     pub associated_token_account: Account<'info, TokenAccount>,
//     // pub associated_token_account: Account<'info, SolwinVault >,

//         pub token_program: Program<'info, Token>,
//     // pub token_program: Program<'info, SolwinVault>,
//     pub associated_token_program: Program<'info, AssociatedToken>,
//         // pub associated_token_program: Program<'info, SolwinVault>,
//     pub system_program: Program<'info, System>,
// }


    pub fn mint_tokens(ctx: Context<MintTokens>, quantity: u64) -> Result<()> {
        let seeds = &["mint".as_bytes(), &[ctx.bumps.mint]];
        let signer = [&seeds[..]];

        mint_to(
            CpiContext::new_with_signer(
                ctx.accounts.token_program.to_account_info(),
                MintTo {
                    authority: ctx.accounts.mint.to_account_info(),
                    to: ctx.accounts.destination.to_account_info(),
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
        seeds = [b"mint"],
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
    pub destination: Account<'info, TokenAccount>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub rent: Sysvar<'info, Rent>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
}

