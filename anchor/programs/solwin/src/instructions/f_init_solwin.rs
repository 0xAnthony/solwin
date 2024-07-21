#![allow(clippy::result_large_err)]

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
use crate::state::{InitTokenParams, FVault};
use crate::constants::{TOKEN_MINT_SEED, MASTER_LOTTERY_SEED, VAULT_SEED};
// use solana_program::program_pack::Pack;
// use spl_token_lending::state::Reserve;
use anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;
// use anchor_lang::system_program;
// use crate::state::{ Vault};
// use crate::constants::{VAULT_SEED};
// use crate::constants::{MASTER_LOTTERY_SEED};


// @todo rename : initialize

pub fn f_init_solwin(_ctx: Context<FInitSolwin>, metadata: InitTokenParams) -> Result<()> {
    // Vault => MOVE TO LOTTERY
        // let vault = &mut _ctx.accounts.vault;
    // let vault: &mut Account<Vault> = &mut _ctx.accounts.vault;
    // vault.sol_balance = 0;
    // msg!("Enter create solwin");

    // Tokens
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


    msg!("cpi context");

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

        msg!("creating metadata account");

    create_metadata_accounts_v3(metadata_ctx, token_data, false, true, None)?;


    // Master Lottery
    let master_lottery = &mut _ctx.accounts.master_lottery;
    master_lottery.last_lottery_id = 0;

  

    Ok(())
}



#[derive(Accounts)]
#[instruction(params: InitTokenParams)]
pub struct FInitSolwin<'info> {
    // /// Vault  => MOVE TO LOTTERY
    // #[account(init, payer = user, space = 8 + 8 + 8, seeds = [VAULT_SEED], bump)]
    // pub vault: Account<'info, Vault>,
    #[account(mut)]
    pub user: Signer<'info>, // repeat payer
    pub system_program: Program<'info, System>,

    // Lottery
// pub struct InitializeMasterLottery<'info> {
    #[account(
        init,
        payer = payer,
        space = 8 + 4,
        seeds = [MASTER_LOTTERY_SEED],
        bump,
    )]
    pub master_lottery: Account<'info, FMasterLottery>,
    // #[account(mut)]
    // pub payer: Signer<'info>,  

    /// Token
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
    // pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub token_metadata_program: Program<'info, Metaplex>,
}

#[account]
pub struct FMasterLottery {
    pub last_lottery_id: u32,
}