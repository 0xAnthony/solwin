use anchor_lang::prelude::*;

#[error_code]
pub enum VaultError {
    #[msg("transfer failed")]
    TransferFailed,
}

#[error_code]
pub enum InError {
    #[msg("transfer failed Closure TEST")]
    TransferFailed,
}


#[error_code]
pub enum TokenError {
    #[msg("Too many choices")]
    NotManyChoices,
    // #[msg("Proposal is closed")]
    // ProposalIsOver,
    // #[msg("Choice index invalid")]
    // ChoiceIndexOutOfScope,
}

