#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;
use solana_program::program_pack::Pack;
use spl_token_lending::state::Reserve;
use anchor_lang::solana_program::native_token::LAMPORTS_PER_SOL;
use anchor_lang::system_program;
// use crate::state::{SolwinVault};


// use spl_token::state::{Account, Mint};
// use spl_token::state::Account as TokenAccount;
// use solana_program::entrypoint::ProgramResult;
// use solana_program::entrypoint_deprecated::ProgramResult;

use anchor_spl::{
    associated_token::AssociatedToken,
    metadata::{
        create_metadata_accounts_v3, mpl_token_metadata::types::DataV2, CreateMetadataAccountsV3,
        Metadata as Metaplex,
    },
    token::{mint_to, Mint, MintTo, Token, TokenAccount},
};
use crate::state::{InitTokenParams, Initialize};


pub mod constants;
pub mod errors;
pub mod instructions;
pub mod state;

use instructions::*;
use state::*;

// Old programId: 8MdiVaEyHeYeU35v4ykmYeh4xN27u5dU7JpyLvB9DFMS
// Ac5jYCkEM8rvM14Uyhfuv3k7Bzwc3iDqkud9tFytFVvq
// Egep28u6NarDY8fPKXBKDsdGLCEZCNXJr1wViGucLBnW
declare_id!("7e23U7nmj3yTNWmjoxyVzaBFJcNG8KpPhZHwXtJVN1FZ");

#[program]
pub mod solwin {
    use super::*;

  pub fn get_exchange_rate(ctx: Context<GetExchangeRate>) -> Result<u64> {
        let reserve_account_info = &ctx.accounts.reserve_account;
        let reserve_data = &reserve_account_info.data.borrow();

        // Deserialize the reserve data
        let reserve = Reserve::unpack(reserve_data).unwrap();


        // Call the collateral_exchange_rate method
        let collateral_exchange_rate = reserve.collateral_exchange_rate().unwrap();

        let rate = collateral_exchange_rate.collateral_to_liquidity(1).unwrap();
        msg!("Collateral rate : {}", rate);

        Ok(rate)
  }

  // SOL DEPOSIT / WITHDRAW (then + lwSOL mint/burn)
  // pub fn create_solwin_vault(ctx: Context<CreateVault>) -> Result<()> {
  //      create_vault(ctx)
  // }

  // pub fn deposit0(ctx: Context<DepositToVault>, amount: u64) -> Result<()> {
  //       deposit(ctx, amount)
  // }

  // pub fn withdraw0(ctx: Context<Withdraw>, amount: u64) -> Result<()> {
  //       withdraw(ctx, amount)
  // }


//     pub fn mint_tokens(ctx: Context<MintTokens>, amount: u64) -> ProgramResult {
//         let mint = &mut ctx.accounts.mint;
//         let to = &ctx.accounts.to;

//         // Vérifier que l'appelant est autorisé à mint des tokens
//         if ctx.accounts.authority.key != &mint.mint_authority {
//             return Err(ErrorCode::Unauthorized.into());
//         }

//         // Mint des tokens au compte spécifié
//         mint.mint_to(to.to_account_info(), amount)?;

//         Ok(())
//     }

//     pub fn burn_tokens(ctx: Context<BurnTokens>, amount: u64) -> ProgramResult {
//         let mint = &mut ctx.accounts.mint;
//         let from = &ctx.accounts.from;

//         // Vérifier que l'appelant est autorisé à brûler des tokens
//         if ctx.accounts.authority.key != &mint.mint_authority {
//             return Err(ErrorCode::Unauthorized.into());
//         }

//         // Burn des tokens du compte spécifié
//         mint.burn_from(from.to_account_info(), amount)?;

//         Ok(())
//     }


////////////////////////////////////////////////////////////////
/// ///////////////////////////////////////////////////////////////

 pub fn initialize_bank(ctx: Context<InitializeBank>) -> Result<()> {
        let vault = &mut ctx.accounts.vault;
        vault.balance = 0;
        Ok(())
    }

    pub fn deposit(ctx: Context<Deposit>, amount: u64) -> Result<()> {
        // let vault = &mut ctx.accounts.vault;
        // let user = &mut ctx.accounts.user;
        
        // // Vérifiez que l'utilisateur a suffisamment de SOL
        // require!(**user.to_account_info().lamports.borrow() >= amount, BankError::InsufficientUserFunds);

        // Transfer SOL from user to vault
        // **vault.to_account_info().try_borrow_mut_lamports()? += amount;
        // **user.to_account_info().try_borrow_mut_lamports()? -= amount;
                let cpi_context = CpiContext::new(
            ctx.accounts.system_program.to_account_info(),
            system_program::Transfer {
                from: ctx.accounts.user.to_account_info(),
                to: ctx.accounts.vault.to_account_info(),
            },
        );
        system_program::transfer(cpi_context, amount)?;

        // vault.balance += amount;
        msg!("Deposited {} lamports into the vault", amount);
        Ok(())
    }

    pub fn withdraw(ctx: Context<Withdraw>, amount: u64) -> Result<()> {
        let vault = &mut ctx.accounts.vault;
        let user = &mut ctx.accounts.user;

        // require!(vault.balance >= amount, BankError::InsufficientFunds);

        // Transfer SOL from vault to user
        **vault.to_account_info().try_borrow_mut_lamports()? -= amount;
        **user.to_account_info().try_borrow_mut_lamports()? += amount;

        // vault.balance -= amount;
        Ok(())
    }

    /////////////////////////////////////////////////////////////////


  // LIQUID TOKEN FUNCS
//   pub fn create_token(
//         ctx: Context<CreateToken>,
//          metadata: InitTokenParams
//     ) -> Result<()> {
//         create_token(ctx, metadata)
//   }
  pub fn create_token(
        ctx: Context<CreateToken>,
         metadata: InitTokenParams
    ) -> Result<()> {
                msg!("ENTRY BEFORE CALL CREATE");

        create_tokens(ctx, metadata)

            // msg!("FINISHED CREATE TOKEN CALL");

  }

  pub fn mint_token(ctx: Context<MintTokens>, amount: u64) -> Result<()> {
        mint_tokens(ctx, amount)
  }

  // OLD STUFF (TO DELETE ONCE WE PROGRESSED)
  // pub fn close(_ctx: Context<CloseCounter>) -> Result<()> {
  //   Ok(())
  // }

  // pub fn decrement(ctx: Context<Update>) -> Result<()> {
  //   ctx.accounts.counter.count = ctx.accounts.counter.count.checked_sub(1).unwrap();
  //   Ok(())
  // }

  // pub fn increment(ctx: Context<Update>) -> Result<()> {
  //   ctx.accounts.counter.count = ctx.accounts.counter.count.checked_add(1).unwrap();
  //   Ok(())
  // }

  // pub fn initialize(_ctx: Context<InitializeCounter>) -> Result<()> {
  //   Ok(())
  // }

  // pub fn set(ctx: Context<Update>, value: u8) -> Result<()> {
  //   ctx.accounts.counter.count = value.clone();
  //   Ok(())
  // }


      pub fn create_token2(_ctx: Context<CreateToken2>, metadata: InitTokenParams) -> Result<()> {
    // pub fn create_token(_ctx: Context<CreateToken>, metadata: InitTokenParams) -> Result<()> {
        let seeds = &["mint".as_bytes(), &[_ctx.bumps.mint]];
        let signer = [&seeds[..]];

        //  let name: String = String::from("liquid solwin SOL");
        // let symbol: String = String::from("lwSOL");
        // let uri: String = String::from("https://arweave.net/Xjqaj_rYYQGrsiTk9JRqpguA813w6NGPikcRyA1vAHM");         
        msg!("Token mint data set");

        let token_data: DataV2 = DataV2 {
            name: metadata.name,
            symbol: metadata.symbol,
            uri: metadata.uri,
            seller_fee_basis_points: 0,
            creators: None,
            collection: None,
            uses: None,
        };
        //         let token_data: DataV2 = DataV2 {
        //     name: name,
        //     symbol: symbol,
        //     uri: uri,
        //     seller_fee_basis_points: 0,
        //     creators: None,
        //     collection: None,
        //     uses: None,
        // };
        msg!("before cpi building");



        let metadata_ctx = CpiContext::new_with_signer(
                // let metadata_ctx = CpiContext::new(
            _ctx.accounts.token_metadata_program.to_account_info(),
            CreateMetadataAccountsV3 {
                payer: _ctx.accounts.payer.to_account_info(),
                update_authority: _ctx.accounts.mint.to_account_info(),//_ctx.accounts.payer.to_account_info(),
                mint: _ctx.accounts.mint.to_account_info(),
                metadata: _ctx.accounts.metadata.to_account_info(),
                mint_authority: _ctx.accounts.mint.to_account_info(),//_ctx.accounts.payer.to_account_info(),
                system_program: _ctx.accounts.system_program.to_account_info(),
                rent: _ctx.accounts.rent.to_account_info(),
            },
            &signer,
        );
        msg!("Token mint before call");

        create_metadata_accounts_v3(metadata_ctx, token_data, false, true, None)?;

        msg!("Token mint created successfully.");
        Ok(())
    }


}



#[derive(Accounts)]
#[instruction(params: InitTokenParams)]
pub struct CreateToken2<'info> {
    #[account(mut)]
    /// CHECK: UncheckedAccount
    pub metadata: UncheckedAccount<'info>,
    #[account(
        init,
        seeds = [b"mint"],
        bump,
        payer = payer,
        mint::decimals = params.decimals,
        mint::authority = mint,
    )]
    pub mint: Account<'info, Mint>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub rent: Sysvar<'info, Rent>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub token_metadata_program: Program<'info, Metaplex>,
}

// LENDING DATA
#[derive(Accounts)]
pub struct GetExchangeRate<'info> {
    #[account()]
    /// CHECK: This is not dangerous because we just read from this account
    pub reserve_account: AccountInfo<'info>,
}

// OLD STUFF (TO DELETE ONCE WE PROGRESSED)
// #[derive(Accounts)]
// pub struct InitializeCounter<'info> {
//   #[account(mut)]
//   pub payer: Signer<'info>,

//   #[account(
//   init,
//   space = 8 + Counter::INIT_SPACE,
//   payer = payer
//   )]
//   pub counter: Account<'info, Counter>,
//   pub system_program: Program<'info, System>,
// }
// #[derive(Accounts)]
// pub struct CloseCounter<'info> {
//   #[account(mut)]
//   pub payer: Signer<'info>,

//   #[account(
//   mut,
//   close = payer, // close account and return lamports to payer
//   )]
//   pub counter: Account<'info, Counter>,
// }

// #[derive(Accounts)]
// pub struct Update<'info> {
//   #[account(mut)]
//   pub counter: Account<'info, Counter>,
// }

// #[account]
// #[derive(InitSpace)]
// pub struct Counter {
//   count: u8,
// }


/////////////////////////////////////////////////////////////////
/// ///////////////////////////////////////////////////////////////

#[derive(Accounts)]
pub struct InitializeBank<'info> {
    #[account(init, payer = user, space = 8 + 8, seeds = [b"vault16"], bump)]
    pub vault: Account<'info, Vault>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Deposit<'info> {
    #[account(mut, seeds = [b"vault16"], bump)]
    pub vault: Account<'info, Vault>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Withdraw<'info> {
    #[account(mut, seeds = [b"vault16"], bump)]
    pub vault: Account<'info, Vault>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Vault {
    pub balance: u64,
}

#[error_code]
pub enum BankError {
    #[msg("Insufficient funds in the vault.")]
    InsufficientFunds,
    #[msg("Insufficient funds in the user account.")]
    InsufficientUserFunds,
}