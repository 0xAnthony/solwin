use anchor_lang::prelude::*;

#[error_code]
pub enum VaultError {
    #[msg("transfer failed")]
    TransferFailed,
}


// #[error_code]
// pub enum TokenError {
//     #[msg("Too many choices")]
//     NotManyChoices,
// }

// #[error_code]
// pub enum BankError {
//     #[msg("Insufficient funds in the vault.")]
//     InsufficientFunds,
//     #[msg("Insufficient funds in the user account.")]
//     InsufficientUserFunds,
// }