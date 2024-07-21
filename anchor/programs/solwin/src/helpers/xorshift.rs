use anchor_lang::prelude::*;
use anchor_lang::solana_program::msg;


// use super::*;

pub fn initialize_xorshift(ctx: Context<InitializeXorshift>, seed32: u32, seed64: u64) -> Result<()> {
    let rng_account = &mut ctx.accounts.rng_account;
    rng_account.xorshift32 = Xorshift32::new(seed32);
    rng_account.xorshift64 = Xorshift64::new(seed64);
    Ok(())
}

pub fn generate_xorshift32(ctx: Context<GenerateXorshift>) -> Result<u32> {
    let rng_account = &mut ctx.accounts.rng_account;
    let rand_num = rng_account.xorshift32.next();
    msg!("Xorshift32: {}", rand_num);
    Ok(rand_num)
}

pub fn generate_xorshift64(ctx: Context<GenerateXorshift>) -> Result<u64> {
    let rng_account = &mut ctx.accounts.rng_account;
    let rand_num = rng_account.xorshift64.next();
    msg!("Xorshift64: {}", rand_num);
    Ok(rand_num)
}

pub fn generate_xorshift64_f64(ctx: Context<GenerateXorshift>) -> Result<f64> {
    let rng_account = &mut ctx.accounts.rng_account;
    let rand_num = rng_account.xorshift64.next_f64();
    msg!("Xorshift64 (0 à 1): {}", rand_num);
    Ok(rand_num)
}


#[derive(Accounts)]
pub struct InitializeXorshift<'info> {
    #[account(init, payer = user, space = 8 + 8 + 32 + 64)]
    pub rng_account: Account<'info, RngAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct GenerateXorshift<'info> {
    #[account(mut)]
    pub rng_account: Account<'info, RngAccount>,
}

#[account]
pub struct RngAccount {
    pub xorshift32: Xorshift32,
    pub xorshift64: Xorshift64,
}

#[derive(Clone, Copy, Default, AnchorSerialize, AnchorDeserialize)]
pub struct Xorshift32 {
    pub state: u32,
}

impl Xorshift32 {
    pub fn new(seed: u32) -> Self {
        assert!(seed != 0, "Seed must be non-zero");
        Xorshift32 { state: seed }
    }

    pub fn next(&mut self) -> u32 {
        let mut x = self.state;
        x ^= x << 13;
        x ^= x >> 17;
        x ^= x << 5;
        self.state = x;
        x
    }
}

#[derive(Clone, Copy, Default, AnchorSerialize, AnchorDeserialize)]
pub struct Xorshift64 {
    pub state: u64,
}

impl Xorshift64 {
    pub fn new(seed: u64) -> Self {
        assert!(seed != 0, "Seed must be non-zero");
        Xorshift64 { state: seed }
    }

    pub fn next(&mut self) -> u64 {
        let mut x = self.state;
        x ^= x << 13;
        x ^= x >> 7;
        x ^= x << 17;
        self.state = x;
        x
    }

    pub fn next_f64(&mut self) -> f64 {
        self.next() as f64 / u64::MAX as f64
    }
}
