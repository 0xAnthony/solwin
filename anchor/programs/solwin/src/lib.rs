#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;
use spl_token_lending::state::Reserve;
use anchor_lang::solana_program::program_pack::Pack;

declare_id!("BGmcQ3wc1HD5BcDfPcxh1GkVnZ1EWFi6iocBbyzbx7zX");

#[program]
pub mod solwin {
    use super::*;

    pub fn initialize_ctoken(ctx: Context<InitializeCToken>) -> Result<()> {
        let ctoken = &mut ctx.accounts.ctoken;
        ctoken.rate = 0;
        ctoken.bump = ctx.bumps.ctoken;
        Ok(())
      }

  pub fn update_exchange_rate(ctx: Context<UpdateExchangeRate>) -> Result<()> {
        let reserve_account_info = &ctx.accounts.reserve_account;
        let reserve_data = &reserve_account_info.data.borrow();

        let reserve = Reserve::unpack(reserve_data);
        let collateral_exchange_rate = reserve?.collateral_exchange_rate().unwrap();
        let rate = collateral_exchange_rate.collateral_to_liquidity(1).unwrap();
        msg!("Updated collateral rate : {}", rate);

        let ctoken = &mut ctx.accounts.ctoken;
        ctoken.rate = rate;

        Ok(())
  }


  // OLD STUFF (TO DELETE ONCE WE PROGRESSED)
  pub fn close(_ctx: Context<CloseCounter>) -> Result<()> {
    Ok(())
  }

  pub fn decrement(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.counter.count = ctx.accounts.counter.count.checked_sub(1).unwrap();
    Ok(())
  }

  pub fn increment(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.counter.count = ctx.accounts.counter.count.checked_add(1).unwrap();
    Ok(())
  }

  pub fn initialize(_ctx: Context<InitializeCounter>) -> Result<()> {
    Ok(())
  }

  pub fn set(ctx: Context<Update>, value: u8) -> Result<()> {
    ctx.accounts.counter.count = value.clone();
    Ok(())
  }
}

#[derive(Accounts)]
pub struct InitializeCToken<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

    #[account(
      init,
      space = 8 + CToken::INIT_SPACE,
      seeds = [b"cToken"], bump,
      payer = payer
    )]
  pub ctoken: Account<'info, CToken>,
  pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UpdateExchangeRate<'info> {
    #[account()]
    // TODO : Force reserve_account to be a specific address
    /// CHECK: This is not dangerous because we just read from this account
    pub reserve_account: AccountInfo<'info>,

     #[account(mut, seeds = [b"cToken"], bump = ctoken.bump)]
    pub ctoken: Account<'info, CToken>,
}

#[account]
#[derive(InitSpace)]
pub struct CToken {
  rate: u64,
  bump: u8
}

// ERRORS
#[error_code]
pub enum Errors {
    #[msg("UNKNOWN ERROR")]
    UnknownError
}



// OLD STUFF (TO DELETE ONCE WE PROGRESSED)
#[derive(Accounts)]
pub struct InitializeCounter<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  init,
  space = 8 + Counter::INIT_SPACE,
  payer = payer
  )]
  pub counter: Account<'info, Counter>,
  pub system_program: Program<'info, System>,
}
#[derive(Accounts)]
pub struct CloseCounter<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  mut,
  close = payer, // close account and return lamports to payer
  )]
  pub counter: Account<'info, Counter>,
}

#[derive(Accounts)]
pub struct Update<'info> {
  #[account(mut)]
  pub counter: Account<'info, Counter>,
}

#[account]
#[derive(InitSpace)]
pub struct Counter {
  count: u8,
}