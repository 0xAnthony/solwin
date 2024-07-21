#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;
use solana_program::program_pack::Pack;
use spl_token_lending::state::Reserve;

declare_id!("ETMR2uxTjbFDYrhaQcPRJZyAYNDdSDcuCDg4doTvqPXv");

#[program]
pub mod solwin {
    use super::*;

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
pub struct GetExchangeRate<'info> {
    #[account()]
    /// CHECK: This is not dangerous because we just read from this account
    pub reserve_account: AccountInfo<'info>,
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