import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
// import { Bank } from "../target/types/bank";
import { Solwin } from "../target/types/solwin";
import assert from "assert";

import BN from "bn.js";
import * as web3 from "@solana/web3.js";

import {
  PublicKey,
  Keypair,
  SystemProgram,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import dotenv from "dotenv";
dotenv.config();

import { expect } from "@jest/globals";
import {
  getConfig,
  getProgram,
  getBalance,
  createWalletAndAirdrop,
  createKeypairFromSecretKey,
} from "./testHelper";

// Set 30 sec timeout for jest
jest.setTimeout(30000);

// TEST CONSTANTS & VARIABLES:
const amountToDeposit = new anchor.BN(0.1 * LAMPORTS_PER_SOL);
const amountToWithdraw = new anchor.BN(0.01 * LAMPORTS_PER_SOL);

describe("bank", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Solwin as Program<Solwin>;

  // //~/WebstormProjects/solana-program-library/owner.json
  const owner = createKeypairFromSecretKey(process.env.OWNER_PRIVATE_KEY);

  const METADATA_SEED = "metadata";
  // default metaplex token metadata program
  // https://metaplex-foundation.github.io/metaplex-program-library/docs/token-metadata/index.html#accountProviders.__type.Metadata
  const TOKEN_METADATA_PROGRAM_ID = new web3.PublicKey(
    "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
  );
  //     uri: "https://raw.githubusercontent.com/solana-developers/program-examples/new-examples/tokens/tokens/.assets/spl-token.json",

  const MINT_SEED = "mint4";
  const BURN_SEED = "bunr";
  // const payer = program.provider.publicKey;
  const metadata = {
    name: "Net2Dev SPL Rewards Token",
    symbol: "N2DR",
    uri: "https://arweave.net/Xjqaj_rYYQGrsiTk9JRqpguA813w6NGPikcRyA1vAHM",
    decimals: 9,
  };
  const mintAmount = 10;
  const burnAmount = 5;

  const [mintAccount] = web3.PublicKey.findProgramAddressSync(
    [Buffer.from(MINT_SEED)],
    program.programId
  );

  const [metadataPDA, bumpPDA] = web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from(METADATA_SEED),
      TOKEN_METADATA_PROGRAM_ID.toBuffer(),
      mintAccount.toBuffer(),
    ],
    TOKEN_METADATA_PROGRAM_ID
  );

  const [vaultPda, vaultBump] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from("vault28")],
    program.programId
  );

  // const { provider, program, owner } = await getConfig();
  //   anchor.setProvider(provider);

  it("Initializes the vault", async () => {
    // const { provider, program, owner } = await getConfig();
    // const bankWallet = await createWallet();
    console.log("Owner PublicKey:", owner.publicKey.toBase58());
    // findProgramAddressSync
    // const [vaultPda, vaultBump] = anchor.web3.PublicKey.findProgramAddressSync(
    //   [Buffer.from("vault22")],
    //   program.programId
    // );
    // vaultPda = vault;

    const info = await program.provider.connection.getAccountInfo(vaultPda);
    if (info) {
      return; // Do not attempt to initialize if already initialized
    }
    console.log("  Vault not found. Initializing Program...");

    const context = {
      vault: vaultPda,
      user: owner.publicKey,
      payer: owner.publicKey, //payer,
      mint: mintAccount,
      metadata: metadataPDA,
      tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
      systemProgram: web3.SystemProgram.programId, //anchor.web3.SystemProgram.programId,
      rent: web3.SYSVAR_RENT_PUBKEY, //anchor.web3.SYSVAR_RENT_PUBKEY,
    };

    let txHash = await program.methods
      .createSolwinApp(metadata)
      .accounts(context)
      .signers([owner])
      //   .rpc();
      .preInstructions([
        anchor.web3.ComputeBudgetProgram.setComputeUnitLimit({
          units: 1_400_000,
          // max_units: 3_000_000,
          // invoke_units: 5000,
          // microLamports: 10,
        }),
        // anchor.web3.ComputeBudgetProgram.setComputeUnitLimit({
        //   microLamports: 2,
        // }),
      ])
      .signers([owner]) // added as removed in program
      .rpc({
        skipPreflight: true,
      }); // to have better errors
    // .simulate()
    //       // .then((simulatedResult) => {
    //       //   console.log(simulatedResult.logs);
    //       // });
    //       //.rpc();
    console.log("Vault PDA:", vaultPda.toString());
    console.log("Vault Bump:", vaultBump.toString());
    console.log("initializeBank tx:", txHash);

    let vaultAccount = await program.account.vault.fetch(vaultPda);
    console.log("account", program.account);
    // console.log("AMOUNTS:", program.accounts);
    let vaultBalanceBeforeDeposit = await getBalance(provider, vaultPda);

    console.log(
      "Vault balance: BEFORE DEPOSIT: ",
      vaultBalanceBeforeDeposit.toString()
    );
    expect(vaultAccount.solBalance.toString()).toBe("0");
    console.log("HEYEHEYEHEY HEYEHEYEHEY");

    let result = await program.account.fe;
    try {
      await program.provider.connection.confirmTransaction(txHash, "finalized");
    } catch (e) {
      console.log("HEYEHEYEHEY HEYEHEYEHEY HEYEHEYEHEY", e);
    }
    console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);
    const newInfo = await program.provider.connection.getAccountInfo(
      mintAccount
    );
    assert(newInfo, "  Mint should be initialized.");
  });

  it("Deposits SOL into the vault and mint token", async () => {
    // const [vaultPda, vaultBump] = anchor.web3.PublicKey.findProgramAddressSync(
    //   [Buffer.from("vault22")],
    //   program.programId
    // );
    let vaultAccount = await program.account.vault.fetch(vaultPda);
    console.log("ICICICI PDA VAULT : ", vaultAccount.solBalance.toString());
    let vaultBalanceBeforeDeposit = await getBalance(provider, vaultPda);

    console.log(
      "Vault balance: BEFORE DEPOSIT: ",
      vaultBalanceBeforeDeposit.toString()
    );
    // const user = await createWallet();
    // display the user public key
    // console.log("User PublicKey:", user.publicKey.toBase58());
    // [vaultPda, vaultBump] = await anchor.web3.PublicKey.findProgramAddress(
    //   [Buffer.from("vault1")],
    //   program.programId
    // );
    const destination = await anchor.utils.token.associatedAddress({
      mint: mintAccount,
      owner: owner.publicKey, //payer,
    });

    let initialBalance: number | null;

    try {
      const balance = await program.provider.connection.getTokenAccountBalance(
        destination
      );
      initialBalance = balance.value.uiAmount;
    } catch {
      // Token account not yet initiated has 0 balance
      initialBalance = 0;
    }
    console.log("token INIT balance of owner", initialBalance);

    const ctx = {
      vault: vaultPda,
      user: owner.publicKey,
      //   systemProgram: anchor.web3.SystemProgram.programId,
      mint: mintAccount,
      payer_mint_ata: destination,
      payer: owner.publicKey,
      rent: web3.SYSVAR_RENT_PUBKEY,
      systemProgram: web3.SystemProgram.programId,
      tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
    };
    const solAmount = 0.5;
    const amountToDeposit = new BN(solAmount * 10 ** 9);

    const txHash = await program.methods
      .depositSolwinApp(amountToDeposit)
      .accounts(ctx)
      .signers([owner]) //user
      .preInstructions([
        anchor.web3.ComputeBudgetProgram.setComputeUnitLimit({
          units: 500_000,
        }),
      ])
      .rpc();

    // vaultAccount = await program.account.vault.fetch(vaultPda);
    // console.log("Vault balance:", vaultAccount.balance.toString());
    let vaultBalanceAfterDeposit = await getBalance(provider, vaultPda);
    console.log(
      "Vault balance: AFTER DEPOSIT: ",
      vaultBalanceAfterDeposit.toString()
    );
    let difFromDeposit = vaultBalanceAfterDeposit - vaultBalanceBeforeDeposit;
    console.log("Dif from deposit: ", difFromDeposit.toString());
    expect(difFromDeposit.toString()).toBe(amountToDeposit.toString());

    await program.provider.connection.confirmTransaction(txHash);
    console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);

    // Token

    const postBalance = (
      await program.provider.connection.getTokenAccountBalance(destination)
    ).value.uiAmount;
    console.log("recap initbalance:", initialBalance);
    console.log("recap amountToDeposit: ", solAmount);
    console.log("recap postbalance: ", postBalance);
    assert.equal(
      initialBalance + solAmount,
      postBalance,
      "Compare balances, it must be equal"
    );
  });

  it("Withdraws SOL from the vault", async () => {
    // const amountToDeposit = new anchor.BN(0.1 * LAMPORTS_PER_SOL);
    const solAmount = 0.5;
    const amountToDeposit = new BN(solAmount * 10 ** 9); // amount in lamports
    const withdrawSolAmount = 0.25;
    const amountToWithdraw = new BN(withdrawSolAmount * 10 ** 9); // amount in lamports
    // const [vaultPda, vaultBump] = anchor.web3.PublicKey.findProgramAddressSync(
    //   [Buffer.from("vault22")],
    //   program.programId
    // );
    let vaultAccount = await program.account.vault.fetch(vaultPda);
    console.log("ICICICI PDA VAULT : ", vaultAccount.solBalance.toString());
    let vaultBalanceBeforeDeposit = await getBalance(provider, vaultPda);

    console.log(
      "Vault balance: BEFORE DEPOSIT: ",
      vaultBalanceBeforeDeposit.toString()
    );
    // const user = await createWallet();
    // display the user public key
    // console.log("User PublicKey:", user.publicKey.toBase58());
    // [vaultPda, vaultBump] = await anchor.web3.PublicKey.findProgramAddress(
    //   [Buffer.from("vault1")],
    //   program.programId
    // );
    const destination = await anchor.utils.token.associatedAddress({
      mint: mintAccount,
      owner: owner.publicKey, //payer,
    });

    let initialBalance: number | null;

    try {
      const balance = await program.provider.connection.getTokenAccountBalance(
        destination
      );
      initialBalance = balance.value.uiAmount;
    } catch {
      // Token account not yet initiated has 0 balance
      initialBalance = 0;
    }
    console.log("token INIT balance of owner", initialBalance);

    const ctx = {
      vault: vaultPda,
      user: owner.publicKey,
      //   systemProgram: anchor.web3.SystemProgram.programId,
      mint: mintAccount,
      payer_mint_ata: destination,
      payer: owner.publicKey,
      rent: web3.SYSVAR_RENT_PUBKEY,
      systemProgram: web3.SystemProgram.programId,
      tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
    };
    //   const solAmount = 0.5;
    //   const amountToDeposit = new BN(solAmount * 10 ** 9);

    const txHash = await program.methods
      .depositSolwinApp(amountToDeposit)
      .accounts(ctx)
      .signers([owner]) //user
      .preInstructions([
        anchor.web3.ComputeBudgetProgram.setComputeUnitLimit({
          units: 500_000,
        }),
      ])
      .rpc();

    // vaultAccount = await program.account.vault.fetch(vaultPda);
    // console.log("Vault balance:", vaultAccount.balance.toString());
    let vaultBalanceAfterDeposit = await getBalance(provider, vaultPda);
    console.log(
      "Vault balance: AFTER DEPOSIT: ",
      vaultBalanceAfterDeposit.toString()
    );
    let difFromDeposit = vaultBalanceAfterDeposit - vaultBalanceBeforeDeposit;
    console.log("Dif from deposit: ", difFromDeposit.toString());
    expect(difFromDeposit.toString()).toBe(amountToDeposit.toString());

    await program.provider.connection.confirmTransaction(txHash);
    console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);

    // Token

    const postBalance = (
      await program.provider.connection.getTokenAccountBalance(destination)
    ).value.uiAmount;
    console.log("recap initbalance:", initialBalance);
    console.log("recap amountToDeposit: ", solAmount);
    console.log("recap postbalance: ", postBalance);
    assert.equal(
      initialBalance + solAmount,
      postBalance,
      "Compare balances, it must be equal"
    );

    // const user = await createWallet();
    // display the user public key
    // console.log("User PublicKey:", user.publicKey.toBase58());
    // [vaultPda, vaultBump] = await anchor.web3.PublicKey.findProgramAddress(
    //   [Buffer.from("vault1")],
    //   program.programId
    // );
    // const amountToWithdraw = new anchor.BN(0.01 * LAMPORTS_PER_SOL);
    const origin = await anchor.utils.token.associatedAddress({
      mint: mintAccount,
      owner: owner.publicKey, //payer,
    });

    let initialBalance2: number | null;

    try {
      const balance = await program.provider.connection.getTokenAccountBalance(
        origin
      );
      initialBalance2 = balance.value.uiAmount;
    } catch {
      // Token account not yet initiated has 0 balance
      initialBalance2 = 0;
    }

    let ctxWithdraw = {
      vault: vaultPda,
      user: owner.publicKey,
      // systemProgram: anchor.web3.SystemProgram.programId,
      mint: mintAccount,
      payer_mint_ata: origin,
      payer: owner.publicKey,
      rent: web3.SYSVAR_RENT_PUBKEY,
      systemProgram: web3.SystemProgram.programId,
      tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
    };

    const txHash2 = await program.methods
      .withdrawSolwinApp(amountToWithdraw)
      .accounts(ctxWithdraw)
      .signers([owner])
      .preInstructions([
        anchor.web3.ComputeBudgetProgram.setComputeUnitLimit({
          units: 500_000,
        }),
      ])
      .rpc();

    vaultAccount = await program.account.vault.fetch(vaultPda);
    // console.log("Vault balance:", vaultAccount.balance.toString());
    let vaultBalanceAfterWithdraw = await getBalance(provider, vaultPda);
    console.log(
      "Vault balance: AFTER WITHDRAW: ",
      vaultBalanceAfterWithdraw.toString()
    );
    let difFromWithdraw = vaultBalanceAfterDeposit - vaultBalanceAfterWithdraw;
    expect(difFromWithdraw.toString()).toBe(amountToWithdraw.toString());

    await program.provider.connection.confirmTransaction(txHash2);
    console.log(`  https://explorer.solana.com/tx/${txHash2}?cluster=devnet`);

    const postBalance2 = (
      await program.provider.connection.getTokenAccountBalance(origin)
    ).value.uiAmount;
    assert.equal(
      initialBalance2 - withdrawSolAmount,
      postBalance2,
      "Compare balances after burning, it must be equal"
    );
  });
});
