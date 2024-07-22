use anchor_lang::prelude::*;

#[account]
pub struct FMasterLottery {
    pub last_lottery_id: u32,
}