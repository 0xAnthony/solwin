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
use crate::xorshift::{RngAccount};


pub mod constants;
pub mod errors;
pub mod instructions;
pub mod state;
pub mod helpers;

use instructions::*;
use state::*;
use helpers::*;
// use errors::*;

// use constants::*;
// Old programId: 
// 8MdiVaEyHeYeU35v4ykmYeh4xN27u5dU7JpyLvB9DFMS
// Ac5jYCkEM8rvM14Uyhfuv3k7Bzwc3iDqkud9tFytFVvq
// Egep28u6NarDY8fPKXBKDsdGLCEZCNXJr1wViGucLBnW
declare_id!("6EBNXWifHe8goCKF6ARu3FXTQUMvAcwwrcNwMwTDjhX5");

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
    // enable to create 2 ctx from one initialize to keep separate func
    // so merged all in one instead of entry func calling sub func

    pub fn create_solwin_app(ctx: Context<Initialize>, metadata: InitTokenParams) -> Result<()> {
        instructions::create_solwin(ctx, metadata)
    }   

    pub fn deposit_solwin_app(ctx: Context<DepositAndMint>, amount: u64) -> Result<()> {
        instructions::deposit_and_mint(ctx, amount)
    }   

    pub fn withdraw_solwin_app(ctx: Context<BurnAndWithdraw>, amount: u64) -> Result<()> {
        instructions::burn_and_withdraw(ctx, amount)
    }   

    /***********************************************
     * 
     *             RANDOMNESS (xorshift, waiting for VRF implementation)
     * 
     ***********************************************/
    pub fn init_xorshift(ctx: Context<InitializeXorshift>,  seed32: u32, seed64: u64) -> Result<()> {
        helpers::initialize_xorshift(ctx, seed32, seed64)
    }  
    
    // pub fn demo_xorshift(ctx: Context<GenerateXorshift>) -> Result<()> {
    //     helpers::generate_xorshift32(ctx);
    //     helpers::generate_xorshift64(ctx);
    //     helpers::generate_xorshift64_f64(ctx);
    //     Ok()
    // }  
    pub fn generate_xorshift32(ctx: Context<GenerateXorshift>) -> Result<u32> {
        let rand_num = helpers::generate_xorshift32(ctx)?;
        Ok(rand_num)
    }  
    pub fn generate_xorshift64(ctx: Context<GenerateXorshift>) -> Result<u64> {
        let rand_num = helpers::generate_xorshift64(ctx)?;
        Ok(rand_num)
    }  
    pub fn generate_xorshift64_f64(ctx: Context<GenerateXorshift>) -> Result<f64> {
        let rand_num = helpers::generate_xorshift64_f64(ctx)?;
        Ok(rand_num)
    }  

    /***********************************************
     * 
     *             CRON COUNTER exp
     * 
     ***********************************************/
    // pub fn initialize_counter(ctx: Context<InitializeCounter>, thread_id: Vec<u8>) -> Result<()> {
    //     instructions::initialize_counter(ctx, thread_id) 
    // }

    // pub fn increment_counter(ctx: Context<IncrementCounter>) -> Result<()> {
    //     instructions::increment_counter(ctx)
    // }

    // pub fn reset_counter(ctx: Context<ResetCounter>) -> Result<()> {
    //     instructions::reset_counter(ctx)
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

    /***********************************************
     * 
     *             LOTTERY FEATURES
     * 
     ***********************************************/
    pub fn initialize_master_lottery(ctx: Context<InitializeMasterLottery>) -> Result<()> {
        instructions::initialize_master_lottery(ctx)
     
    }  

    pub fn initialize_lottery(ctx: Context<InitializeLottery>, ticket_price: u64, round_duration: i64, round_close_slot: i64) -> Result<()> {
        instructions::initialize_lottery(ctx, ticket_price, round_duration, round_close_slot)
    }

    pub fn initialize_round(ctx: Context<InitializeRound>) -> Result<()> {
        instructions::initialize_round(ctx)
    }

    pub fn buy_ticket(ctx: Context<BuyTicket>, lottery_id: u32, round_id: u32) -> Result<()> {
        instructions::buy_ticket(ctx, lottery_id, round_id)
    }

    pub fn close_round(ctx: Context<CloseRound>, lottery_id: u32, round_id: u32) -> Result<()> {
        instructions::close_round(ctx, lottery_id, round_id)
    }

    /***********************************************
     * 
     *             FINAL VERSION
     * 
     ***********************************************/
    pub fn f_initialize_solwin(ctx: Context<FInitSolwin>,metadata: InitTokenParams) -> Result<()> {
        instructions::f_init_solwin(ctx, metadata)
     
    }  

    pub fn f_initialize_lottery(ctx: Context<FInitLottery>, ticket_price: u64, round_duration: i64, round_close_slot: i64) -> Result<()> {
        instructions::f_init_lottery(ctx, ticket_price, round_duration, round_close_slot)
    }

    pub fn f_initialize_round(ctx: Context<FInitRound>) -> Result<()> {
        instructions::f_init_round(ctx)
    }

    // pub fn buy_ticket(ctx: Context<BuyTicket>, lottery_id: u32, round_id: u32) -> Result<()> {
    //     instructions::buy_ticket(ctx, lottery_id, round_id)
    // }

    // pub fn close_round(ctx: Context<CloseRound>, lottery_id: u32, round_id: u32) -> Result<()> {
    //     instructions::close_round(ctx, lottery_id, round_id)
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
