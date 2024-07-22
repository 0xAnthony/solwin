use anchor_lang::prelude::*;

#[account]
pub struct FVault {
    pub sol_balance: u64,
    pub token_balance: u64,
}