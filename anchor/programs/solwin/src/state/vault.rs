use anchor_lang::prelude::*;

#[account]
pub struct SolwinVault {

}

#[account]
pub struct Vault {
    pub balance: u64,
}