import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
// import { Bank } from "../target/types/bank";
import { Solwin } from "../target/types/solwin";

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

  // const { provider, program, owner } = await getConfig();
  //   anchor.setProvider(provider);

  //   it("Initializes the vault", async () => {
  //     // const bankWallet = await createWallet();
  //     console.log("Owner PublicKey:", owner.publicKey.toBase58());

  //     [vaultPda, vaultBump] = await anchor.web3.PublicKey.findProgramAddress(
  //       [Buffer.from("vault1")],
  //       program.programId
  //     );
  //     // vaultPda = vault;

  //     let tx = await program.methods
  //       .initializeBank()
  //       .accounts({
  //         vault: vaultPda,
  //         user: owner.publicKey,
  //         systemProgram: SystemProgram.programId,
  //       })
  //       .signers([owner])
  //       .rpc();

  //     console.log("Vault PDA:", vaultPda.toString());
  //     console.log("Vault Bump:", vaultBump.toString());
  //     console.log("initializeBank tx:", tx);

  //     const vaultAccount = await program.account.vault.fetch(vaultPda);
  //     console.log("Vault balance:", vaultAccount.balance.toString());
  //     expect(vaultAccount.balance.toString()).toBe("0");
  //   });

  //   it("Deposits SOL into the vault", async () => {
  //     // const user = await createWallet();
  //     // display the user public key
  //     // console.log("User PublicKey:", user.publicKey.toBase58());
  //     [vaultPda, vaultBump] = await anchor.web3.PublicKey.findProgramAddress(
  //       [Buffer.from("vault1")],
  //       program.programId
  //     );
  //     const amount = new anchor.BN(0.1 * LAMPORTS_PER_SOL);

  //     await program.methods
  //       .deposit(amount)
  //       .accounts({
  //         vault: vaultPda,
  //         user: owner.publicKey,
  //         systemProgram: anchor.web3.SystemProgram.programId,
  //       })
  //       .signers([owner]) //user
  //       .preInstructions([
  //         anchor.web3.ComputeBudgetProgram.setComputeUnitLimit({
  //           units: 500_000,
  //         }),
  //       ])
  //       .rpc();

  //     const vaultAccount = await program.account.vault.fetch(vaultPda);
  //     console.log("Vault balance:", vaultAccount.balance.toString());
  //     expect(vaultAccount.balance.toString()).toBe(amount.toString());
  //   });

  //   it("Withdraws SOL from the vault", async () => {
  //     // const user = await createWallet();
  //     // display the user public key
  //     // console.log("User PublicKey:", user.publicKey.toBase58());
  //     [vaultPda, vaultBump] = await anchor.web3.PublicKey.findProgramAddress(
  //       [Buffer.from("vault1")],
  //       program.programId
  //     );
  //     const amount = new anchor.BN(0.05 * LAMPORTS_PER_SOL);

  //     await program.methods
  //       .withdraw(amount)
  //       .accounts({
  //         vault: vaultPda,
  //         user: owner.publicKey,
  //         systemProgram: anchor.web3.SystemProgram.programId,
  //       })
  //       .signers([owner])
  //       .rpc();

  //     const vaultAccount = await program.account.vault.fetch(vaultPda);
  //     console.log("Vault balance:", vaultAccount.balance.toString());
  //     expect(vaultAccount.balance.toString()).toBe(
  //       (0.1 - 0.05) * LAMPORTS_PER_SOL
  //     );
  //   });
  // const VAULT_SEED = "mint";
  // const [testVault] = web3.PublicKey.findProgramAddressSync(
  //   [Buffer.from(VAULT_SEED)],
  //   program.programId
  // );

  it("Initializes the vault", async () => {
    // const { provider, program, owner } = await getConfig();
    // const bankWallet = await createWallet();
    console.log("Owner PublicKey:", owner.publicKey.toBase58());

    const [vaultPda, vaultBump] =
      await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from("vault17")],
        program.programId
      );
    // vaultPda = vault;

    const info = await program.provider.connection.getAccountInfo(vaultPda);
    if (info) {
      return; // Do not attempt to initialize if already initialized
    }

    let tx = await program.methods
      .initializeSolwin()
      .accounts({
        vault: vaultPda,
        user: owner.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([owner])
      .rpc();
    // .simulate()
    //       // .then((simulatedResult) => {
    //       //   console.log(simulatedResult.logs);
    //       // });
    //       //.rpc();
    console.log("Vault PDA:", vaultPda.toString());
    console.log("Vault Bump:", vaultBump.toString());
    console.log("initializeBank tx:", tx);

    let vaultAccount = await program.account.vault.fetch(vaultPda);
    let vaultBalanceBeforeDeposit = await getBalance(provider, vaultPda);

    console.log(
      "Vault balance: BEFORE DEPOSIT: ",
      vaultBalanceBeforeDeposit.toString()
    );
    expect(vaultAccount.balance.toString()).toBe("0");
  });

  it("Deposits SOL into the vault", async () => {
    const [vaultPda, vaultBump] =
      await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from("vault17")],
        program.programId
      );
    let vaultAccount = await program.account.vault.fetch(vaultPda);
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

    await program.methods
      .depositSolwin(amountToDeposit)
      .accounts({
        vault: vaultPda,
        user: owner.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
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
  });

  it("Withdraws SOL from the vault", async () => {
    const amountToDeposit = new anchor.BN(0.1 * LAMPORTS_PER_SOL);

    const [vaultPda, vaultBump] =
      await anchor.web3.PublicKey.findProgramAddress(
        [Buffer.from("vault17")],
        program.programId
      );
    let vaultAccount = await program.account.vault.fetch(vaultPda);
    let vaultBalanceBeforeDeposit = await getBalance(provider, vaultPda);

    console.log(
      "Vault balance: BEFORE DEPOSIT: ",
      vaultBalanceBeforeDeposit.toString()
    );

    await program.methods
      .depositSolwin(amountToDeposit)
      .accounts({
        vault: vaultPda,
        user: owner.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
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

    // const user = await createWallet();
    // display the user public key
    // console.log("User PublicKey:", user.publicKey.toBase58());
    // [vaultPda, vaultBump] = await anchor.web3.PublicKey.findProgramAddress(
    //   [Buffer.from("vault1")],
    //   program.programId
    // );
    // const amountToWithdraw = new anchor.BN(0.01 * LAMPORTS_PER_SOL);

    await program.methods
      .withdrawSolwin(amountToWithdraw)
      .accounts({
        vault: vaultPda,
        user: owner.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
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
  });
});
