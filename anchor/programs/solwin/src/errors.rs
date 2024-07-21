use anchor_lang::prelude::*;

#[error_code]
pub enum VaultError {
    #[msg("transfer failed")]
    TransferFailed,
}

#[error_code]
pub enum XorshiftError {
    #[msg("Seed must be non-zero")]
    SeedEqualZero,

}

// !!! duplicate !!!
#[error_code]
pub enum RewardError {
    #[msg("Signer not user data owner")]
    NotUserDataOWner,
}

#[error_code]
pub enum LotteryError {
    #[msg("Winner already exists")]
    WinnerAlreadyExists,
    #[msg("Round not open")]
    RoundNotOpen,
    #[msg("Invalid lottery id")]
    InvalidLotteryId,
    #[msg("Invalid round id")]
    InvalidRoundId,
    #[msg("Round not closeable")]
    RoundNotCloseable,
    #[msg("Invalid lottery account")]
    InvalidAccount,
    #[msg("Signer not user data owner")]
    NotUserDataOWner,
    #[msg("Not enough credits")]
    NotEnoughCredits
    #[msg("Winner Data Not Found")]
    WinnerDataNotFound
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