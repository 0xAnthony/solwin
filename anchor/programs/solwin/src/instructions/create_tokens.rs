use anchor_lang::prelude::*;
use anchor_spl::{
    // associated_token::AssociatedToken,
    metadata::{
        create_metadata_accounts_v3, mpl_token_metadata::types::DataV2, CreateMetadataAccountsV3,
        Metadata as Metaplex,
    },
    // token::{mint_to, Mint, MintTo, Token, TokenAccount},
        token::{Mint, Token},
};
use crate::state::{InitTokenParams};
use crate::constants::{TOKEN_MINT_SEED};


pub fn create_tokens(_ctx: Context<CreateToken>, metadata: InitTokenParams) -> Result<()> {
    // pub fn create_token(_ctx: Context<CreateToken>, metadata: InitTokenParams) -> Result<()> {
    let seeds = &[TOKEN_MINT_SEED, &[_ctx.bumps.mint]]; //"mint".as_bytes()
    let signer = [&seeds[..]];

    msg!("Token mint data set");

    let token_data: DataV2 = DataV2 {
        name: metadata.name,
        symbol: metadata.symbol,
        uri: metadata.uri,
        seller_fee_basis_points: 0,
        creators: None,
        collection: None,
        uses: None,
    };



    let metadata_ctx = CpiContext::new_with_signer(
        // let metadata_ctx = CpiContext::new(
        _ctx.accounts.token_metadata_program.to_account_info(),
        CreateMetadataAccountsV3 {
            payer: _ctx.accounts.payer.to_account_info(),
            update_authority: _ctx.accounts.mint.to_account_info(),//_ctx.accounts.mint.to_account_info(),
            mint: _ctx.accounts.mint.to_account_info(),
            metadata: _ctx.accounts.metadata.to_account_info(),
            mint_authority: _ctx.accounts.mint.to_account_info(),//_ctx.accounts.mint.to_account_info(),
            system_program: _ctx.accounts.system_program.to_account_info(),
            rent: _ctx.accounts.rent.to_account_info(),
        },
        &signer,
    );

    create_metadata_accounts_v3(metadata_ctx, token_data, false, true, None)?;

    Ok(())
}

#[derive(Accounts)]
#[instruction(params: InitTokenParams)]
pub struct CreateToken<'info> {
    #[account(mut)]
    /// CHECK: UncheckedAccount
    pub metadata: UncheckedAccount<'info>,
    #[account(
        init,
        seeds = [TOKEN_MINT_SEED],
        bump,
        payer = payer,
        mint::decimals = params.decimals,
        mint::authority = mint,
    )]
    pub mint: Account<'info, Mint>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub rent: Sysvar<'info, Rent>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub token_metadata_program: Program<'info, Metaplex>,
}

