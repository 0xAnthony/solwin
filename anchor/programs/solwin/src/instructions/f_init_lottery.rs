#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;
// use solana_program::program_pack::Pack;
// use spl_token_lending::state::Reserve;
// use anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;
// // use anchor_lang::system_program;
// use crate::state::{ Vault};
// use crate::constants::{VAULT_SEED};
use crate::constants::{MASTER_LOTTERY_SEED, VAULT_SEED, LOTTERY_SEED};
use crate::instructions::f_init_solwin::{FMasterLottery};
use crate::state::{ FVault};
use crate::errors::LotteryError;

/*
 * At the moment consider:
 * MasterLottery -> x Lottery -> one Vault/strat + n rounds
 * so:
 * -one round is one lottery game
 * -one lottery is one lottery config (price, vault..)
 * only one price (0.1 SOL) for now
 */
pub fn f_init_lottery(ctx: Context<FInitLottery>, ticket_price: u64, round_duration: i64, round_close_slot: i64) -> Result<()> {
    let master_lottery = &mut ctx.accounts.master_lottery;
    let lottery = &mut ctx.accounts.lottery;

      // Vault => MOVE TO LOTTERY
        // let vault = &mut _ctx.accounts.vault;
    let vault: &mut Account<FVault> = &mut ctx.accounts.vault;
    vault.sol_balance = 0;
    msg!("Enter create solwin");

    // Add params for lending here (add..)

   let (lottery_key, bump) = Pubkey::find_program_address(
        &[LOTTERY_SEED, &(lottery.last_lottery_id + 1).to_le_bytes()],
        ctx.program_id,
    );

    if lottery.key != lottery_key {
        return err!(LotteryError::InvalidAccount);
    }
    lottery.bump = bump;


    // Initialize the last lottery id (this one)
    master_lottery.last_lottery_id += 1;
    // Initialize the lottery
    lottery.id = master_lottery.last_lottery_id;
    lottery.authority = ctx.accounts.authority.key();
    lottery.ticket_price = ticket_price;
    lottery.last_round_id = 0;
    lottery.round_duration = round_duration;
    lottery.round_close_slot = round_close_slot;

    msg!("Lottery initialized with id : {}", lottery.id);
    msg!("Ticket price : {}", lottery.ticket_price);
    msg!("Last round id : {}", lottery.last_round_id);
    msg!("Authority : {}", lottery.authority);
    msg!("round_duration in sec : {}", lottery.round_duration);
    msg!("round_close_slot in sec : {}", lottery.round_close_slot);

    Ok(())
}


// signer is payer & owner
#[derive(Accounts)]
pub struct FInitLottery<'info> {
    #[account(
        mut,
        // seeds = [MASTER_LOTTERY_SEED],
        // bump,
    )]
    pub master_lottery: Account<'info, FMasterLottery>,
    #[account(
        init,
        payer = user,
        space = 8 + 8 + 8, 
        seeds = [
            VAULT_SEED, 
            &(master_lottery.last_lottery_id + 1).to_le_bytes()
            ], 
        bump)]
    pub vault: Account<'info, FVault>,
    #[account(
        init,
        payer = authority,
        space = 8 + 4 + 32 + 8 + 4 + 8 + 8 + 1,
        seeds = [LOTTERY_SEED, &(master_lottery.last_lottery_id + 1).to_le_bytes()],
        bump,
    )]
    pub lottery: Account<'info, FLottery>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
    #[account(mut)]
    pub user: Signer<'info>,
    // pub authority = Signer<'info>
}

#[account]
pub struct FLottery {
    pub id: u32,
    pub authority: Pubkey,
    pub ticket_price: u64,
    pub last_round_id: u32,
    pub round_duration: i64,
    pub round_close_slot: i64,
    pub bump: u8,
    // add status var (up, down.. or closed)
    // add vault, strat config
}