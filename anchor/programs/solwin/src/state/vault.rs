use anchor_lang::prelude::*;


#[account]
pub struct Vault {
    pub sol_balance: u64,
    pub token_balance: u64,
}