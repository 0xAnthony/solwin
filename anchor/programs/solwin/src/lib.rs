#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;
use solana_program::program_pack::Pack;
use spl_token_lending::state::Reserve;
use anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;
// use anchor_lang::system_program;
// use anchor_spl::{
//     associated_token::AssociatedToken,
//     metadata::{
//         create_metadata_accounts_v3, mpl_token_metadata::types::DataV2, CreateMetadataAccountsV3,
//         Metadata as Metaplex,
//     },
//     token::{mint_to, Mint, MintTo, Token, TokenAccount},
// };


pub mod constants;
pub mod errors;
pub mod instructions;
pub mod state;

use instructions::*;
use state::*;
// use errors::*;

// use constants::*;
// Old programId: 
// 8MdiVaEyHeYeU35v4ykmYeh4xN27u5dU7JpyLvB9DFMS
// Ac5jYCkEM8rvM14Uyhfuv3k7Bzwc3iDqkud9tFytFVvq
// Egep28u6NarDY8fPKXBKDsdGLCEZCNXJr1wViGucLBnW
declare_id!("Em2enZKMKNc9Jsoc6DCNdaAmjTdaJ5Xjn4pm5Adr3mXT");

#[program]
pub mod solwin {
    use super::*;

    /***********************************************
     * 
     *             LENDING FUNCTIONS
     * 
     ***********************************************/
    pub fn get_exchange_rate(ctx: Context<GetExchangeRate>) -> Result<u64> {
        let reserve_account_info = &ctx.accounts.reserve_account;
        let reserve_data = &reserve_account_info.data.borrow();

        // Deserialize the reserve data
        let reserve = Reserve::unpack(reserve_data).unwrap();


        // Call the collateral_exchange_rate method
        let collateral_exchange_rate = reserve.collateral_exchange_rate().unwrap();

        let rate = collateral_exchange_rate.collateral_to_liquidity(1).unwrap();
        msg!("Collateral rate : {}", rate);

        Ok(rate)
    }


    /***********************************************
     * 
     *             SOLWIN FUNCTIONS
     * 
     ***********************************************/
    pub fn initialize_solwin(ctx: Context<InitializeBank>) -> Result<()> {
        instructions::initialize_bank(ctx)
    }

    pub fn deposit_solwin(ctx: Context<Deposit>, amount: u64) -> Result<()> {
        instructions::deposit(ctx, amount)
    }

    pub fn withdraw_solwin(ctx: Context<Withdraw>, amount: u64) -> Result<()> {
        instructions::withdraw(ctx, amount)
    }

    

    /***********************************************
     * 
     *             TOKEN FUNCTIONS
     * 
     ***********************************************/

 
    pub fn create_token(ctx: Context<CreateToken>,metadata: InitTokenParams) -> Result<()> {
        msg!("ENTRY BEFORE CALL CREATE");
        instructions::create_tokens(ctx, metadata)
    }

    pub fn mint_token(ctx: Context<MintTokens>, amount: u64) -> Result<()> {
        instructions::mint_tokens(ctx, amount)
    }

    pub fn burn_token(ctx: Context<BurnTokens>, amount: u64) -> Result<()> {
        instructions::burn_tokens(ctx, amount)
    }

    /***********************************************
     * 
     *             GENERAL FUNCTIONS (merging sol & token management)
     * 
     ***********************************************/
    
    
    // initialization : init the vault and the token by calling: initialize_solwin and create_token
    // pub fn initialize(ctx: Context<InitializeAll>, metadata: InitTokenParams) -> Result<()> {

    //     let initialize_solwin_ctx = Context::new(
    //         ctx.program_id, // Identifiant du programme
    //         InitializeSolwin {
    //             // payer: ctx.accounts.payer.clone(), // Compte payeur
    //             vault: ctx.accounts.vault.clone(), // Compte vault
    //             user: ctx.accounts.user.clone(), // Compte utilisateur
    //             system_program: ctx.accounts.system_program.clone(), // Programme système
    //             // rent: ctx.accounts.rent.clone(), // Sysvar rent
    //         },
    //         ctx.remaining_accounts, // Comptes restants
    //                 &[], // Seeds pour signer les transactions

    //     );

    //     initialize_solwin(initialize_solwin_ctx)?;


    //     let create_token_ctx = Context::new(
    //         ctx.program_id, // Identifiant du programme
    //         CreateToken {
    //             payer: ctx.accounts.payer.clone(), // Compte payeur
    //             mint: ctx.accounts.mint.clone(), // Compte mint
    //             metadata: ctx.accounts.metadata.clone(), // Metadata
    //             // token_account: ctx.accounts.token_account.clone(), // Compte token
    //             token_program: ctx.accounts.token_program.clone(), // Programme token
    //             token_metadata_program: ctx.accounts.token_metadata_program.clone(), // Programme metadata
    //             system_program: ctx.accounts.system_program.clone(), // Programme système
    //             rent: ctx.accounts.rent.clone(), // Sysvar rent
    //         },
    //         ctx.remaining_accounts, // Comptes restants
    //                 &[], // Seeds pour signer les transactions

    //     );


    //     create_token(create_token_ctx, metadata)?;
    //     Ok(())
    // }



    
  // OLD STUFF (TO DELETE ONCE WE PROGRESSED)
  // pub fn close(_ctx: Context<CloseCounter>) -> Result<()> {
  //   Ok(())
  // }

  // pub fn decrement(ctx: Context<Update>) -> Result<()> {
  //   ctx.accounts.counter.count = ctx.accounts.counter.count.checked_sub(1).unwrap();
  //   Ok(())
  // }

  // pub fn increment(ctx: Context<Update>) -> Result<()> {
  //   ctx.accounts.counter.count = ctx.accounts.counter.count.checked_add(1).unwrap();
  //   Ok(())
  // }

  // pub fn initialize(_ctx: Context<InitializeCounter>) -> Result<()> {
  //   Ok(())
  // }

  // pub fn set(ctx: Context<Update>, value: u8) -> Result<()> {
  //   ctx.accounts.counter.count = value.clone();
  //   Ok(())
  // }

}



// LENDING DATA
#[derive(Accounts)]
pub struct GetExchangeRate<'info> {
    #[account()]
    /// CHECK: This is not dangerous because we just read from this account
    pub reserve_account: AccountInfo<'info>,
}

// OLD STUFF (TO DELETE ONCE WE PROGRESSED)
// #[derive(Accounts)]
// pub struct InitializeCounter<'info> {
//   #[account(mut)]
//   pub payer: Signer<'info>,

//   #[account(
//   init,
//   space = 8 + Counter::INIT_SPACE,
//   payer = payer
//   )]
//   pub counter: Account<'info, Counter>,
//   pub system_program: Program<'info, System>,
// }
// #[derive(Accounts)]
// pub struct CloseCounter<'info> {
//   #[account(mut)]
//   pub payer: Signer<'info>,

//   #[account(
//   mut,
//   close = payer, // close account and return lamports to payer
//   )]
//   pub counter: Account<'info, Counter>,
// }

// #[derive(Accounts)]
// pub struct Update<'info> {
//   #[account(mut)]
//   pub counter: Account<'info, Counter>,
// }

// #[account]
// #[derive(InitSpace)]
// pub struct Counter {
//   count: u8,
// }
