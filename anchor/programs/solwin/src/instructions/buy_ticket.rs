#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;
 use anchor_lang::system_program;
// use solana_program::program_pack::Pack;
// use spl_token_lending::state::Reserve;
// use anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;
// // use anchor_lang::system_program;
// use crate::state::{ Vault};
// use crate::constants::{VAULT_SEED};

// use::crate::state::{Lottery, Round};
use crate::constants::{ LOTTERY_SEED, ROUND_SEED, TICKET_SEED};
use crate::errors::LotteryError;
use crate::instructions::init_lottery::Lottery;
use crate::instructions::init_round::Round;
use crate::instructions::init_round::RoundStatus;

// @todo batch buy (many tickets
// @todo antiwhale : max ticket per user: 25 % of total tickets ?)

// @todo : seed to be master/lottery/round
pub fn buy_ticket(ctx: Context<BuyTicket>, lottery_id: u32, round_id: u32) -> Result<()> {
    let lottery = &mut ctx.accounts.lottery;
    let round = &mut ctx.accounts.round;
    let ticket = &mut ctx.accounts.ticket;
    let buyer = &ctx.accounts.buyer;

    let mut round_clone = ctx.accounts.round.clone();

     msg!("Perform check before transfer: 1");
    // check id of lottery and round match the one of pdas:
    if lottery.id != lottery_id {
        return err!(LotteryError::InvalidLotteryId);
    }
    msg!("Perform check before transfer: 2");
    if round_clone.id != round_id {
        return err!(LotteryError::InvalidRoundId);
    }
    msg!("Perform check before transfer: 3");
    
    if round_clone.winner_id.is_some() {
        return err!(LotteryError::WinnerAlreadyExists);
    }
    msg!("Perform check before transfer: 4");
    // check round status is Open
    if round_clone.status != RoundStatus::Open {
        return err!(LotteryError::RoundNotOpen);
    }
    msg!("Perform check before transfer: 5");
    // @todo later: no payment, funds are deposit in vault brefore
    // ticket is 'booked' accordingly to the remaining available user balance
    
    // TO REMOVE : Transfer SOL to Lottery PDA
    // invoke(
    //     &transfer(&buyer.key(), &lottery.key(), lottery.ticket_price),
    //     &[
    //         buyer.to_account_info(),
    //         lottery.to_account_info(),
    //         ctx.accounts.system_program.to_account_info(),
    //     ],
    // )?;       
    let cpi_context = CpiContext::new(
        ctx.accounts.system_program.to_account_info(),
        system_program::Transfer {
            from: ctx.accounts.buyer.to_account_info(),
            to: ctx.accounts.round.to_account_info(),
        },
    );
    system_program::transfer(cpi_context, lottery.ticket_price)?;
    
    msg!("transfer done! ***");
    round_clone.last_ticket_id += 1;

    ticket.id = round_clone.last_ticket_id;
    ticket.lottery_id = lottery_id;
    ticket.round_id = round_id;
    ticket.authority = buyer.key();

    msg!("Ticket id: {}", ticket.id);
    msg!("Ticket authority: {}", ticket.authority);

    Ok(())
}

#[derive(Accounts)]
pub struct BuyTicket<'info> {
    #[account(mut)]
    pub lottery: Account<'info, Lottery>,
    #[account(mut)]
    pub round: Account<'info, Round>,
    #[account(
        init,
        payer = buyer,
        space = 8 + 4 + 4 + 4 + 32,
        seeds = [TICKET_SEED, &(round.last_ticket_id + 1).to_le_bytes()],    //buyer.key().as_ref()],
        bump,
    )]
    pub ticket: Account<'info, Ticket>,
    #[account(mut)]
    pub buyer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

// surely missing some fields
#[account]
pub struct Ticket {
    pub id: u32,
    pub lottery_id: u32,
    pub round_id: u32,
    pub authority: Pubkey,
}