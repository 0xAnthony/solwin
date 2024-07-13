// use {
//     anchor_lang::prelude::*,
//     anchor_spl::{
//         metadata::{
//             create_metadata_accounts_v3, mpl_token_metadata::types::DataV2,
//             CreateMetadataAccountsV3,  Metadata as Metaplex,
//         },
//         token::{Mint, Token},
//     },
// };
use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken,
    metadata::{
        create_metadata_accounts_v3, mpl_token_metadata::types::DataV2, CreateMetadataAccountsV3,
        Metadata as Metaplex,
    },
    token::{mint_to, Mint, MintTo, Token, TokenAccount},
};
use crate::state::{InitTokenParams, Initialize};


// pub fn create_token(
//     ctx: Context<CreateToken>,
//     token_name: String,
//     token_symbol: String,
//     token_uri: String,
// ) -> Result<()> {
//     msg!("Creating metadata account");

//     // Cross Program Invocation (CPI)
//     // Invoking the create_metadata_account_v3 instruction on the token metadata program
//     create_metadata_accounts_v3(
//         CpiContext::new(
//             ctx.accounts.token_metadata_program.to_account_info(),
//             CreateMetadataAccountsV3 {
//                 metadata: ctx.accounts.metadata_account.to_account_info(),
//                 mint: ctx.accounts.mint_account.to_account_info(),
//                 mint_authority: ctx.accounts.payer.to_account_info(),
//                 update_authority: ctx.accounts.payer.to_account_info(),
//                 payer: ctx.accounts.payer.to_account_info(),
//                 system_program: ctx.accounts.system_program.to_account_info(),
//                 rent: ctx.accounts.rent.to_account_info(),
//             },
//         ),
//         DataV2 {
//             name: token_name,
//             symbol: token_symbol,
//             uri: token_uri,
//             seller_fee_basis_points: 0,
//             creators: None,
//             collection: None,
//             uses: None,
//         },
//         false, // Is mutable
//         true,  // Update authority is signer
//         None,  // Collection details
//     )?;

//     msg!("Token created successfully.");

//     Ok(())
// }


// #[derive(Accounts)]
// pub struct CreateToken<'info> {
//     #[account(mut)]
//     pub payer: Signer<'info>,

//     #[account(
//         init,
//         payer = payer,
//         mint::decimals = 9,
//         mint::authority = payer.key(),// payer
//         mint::freeze_authority = payer.key(),

//     )]
//     pub mint_account: Account<'info, Mint>,

//     /// CHECK: Validate address by deriving pda
//     #[account(
//         mut,
//         seeds = [b"metadata", token_metadata_program.key().as_ref(), mint_account.key().as_ref()],
//         bump,
//         seeds::program = token_metadata_program.key(),
//     )]
//     pub metadata_account: UncheckedAccount<'info>,

//     pub token_program: Program<'info, Token>,
//     pub token_metadata_program: Program<'info, Metadata>,
//     pub system_program: Program<'info, System>,
//     pub rent: Sysvar<'info, Rent>,
// }

    pub fn create_tokens(_ctx: Context<CreateToken>, metadata: InitTokenParams) -> Result<()> {
    // pub fn create_token(_ctx: Context<CreateToken>, metadata: InitTokenParams) -> Result<()> {
        let seeds = &["mint".as_bytes(), &[_ctx.bumps.mint]];
        let signer = [&seeds[..]];

        //  let name: String = String::from("liquid solwin SOL");
        // let symbol: String = String::from("lwSOL");
        // let uri: String = String::from("https://arweave.net/Xjqaj_rYYQGrsiTk9JRqpguA813w6NGPikcRyA1vAHM");         
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
        //         let token_data: DataV2 = DataV2 {
        //     name: name,
        //     symbol: symbol,
        //     uri: uri,
        //     seller_fee_basis_points: 0,
        //     creators: None,
        //     collection: None,
        //     uses: None,
        // };
        msg!("before cpi building");



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
        msg!("Token mint before call");

        create_metadata_accounts_v3(metadata_ctx, token_data, false, true, None)?;

        msg!("Token mint created successfully.");
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
        seeds = [b"mint"],
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

