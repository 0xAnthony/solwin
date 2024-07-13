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

// jest.setTimeout(30000); // 30 seconds timeout

describe("bank", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Solwin as Program<Solwin>;

  let vaultPda: anchor.web3.PublicKey;
  let vaultBump: number;

  async function getBalance(provider, publicKey) {
    return await provider.connection.getBalance(publicKey);
  }

  function createKeypairFromSecretKey(secretKey: string): Keypair {
    const secretKeyArray = JSON.parse(secretKey);
    const secretKeyUint8Array = Uint8Array.from(secretKeyArray);
    return Keypair.fromSecretKey(secretKeyUint8Array);
  }
  //~/WebstormProjects/solana-program-library/owner.json
  const owner = createKeypairFromSecretKey(process.env.OWNER_PRIVATE_KEY);

  async function createWallet(): Promise<Keypair> {
    const wallet = new Keypair();
    let tx = await program.provider.connection.requestAirdrop(
      wallet.publicKey,
      1000000000
    );
    await program.provider.connection.confirmTransaction(tx);
    return wallet;
  }

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
    // const bankWallet = await createWallet();
    console.log("Owner PublicKey:", owner.publicKey.toBase58());

    [vaultPda, vaultBump] = await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from("vault16")],
      program.programId
    );
    // vaultPda = vault;

    const info = await program.provider.connection.getAccountInfo(vaultPda);
    if (info) {
      return; // Do not attempt to initialize if already initialized
    }

    let tx = await program.methods
      .initializeBank()
      .accounts({
        vault: vaultPda,
        user: owner.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([owner])
      .rpc();

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
    //   });

    //   it("Deposits SOL into the vault", async () => {
    // const user = await createWallet();
    // display the user public key
    // console.log("User PublicKey:", user.publicKey.toBase58());
    // [vaultPda, vaultBump] = await anchor.web3.PublicKey.findProgramAddress(
    //   [Buffer.from("vault1")],
    //   program.programId
    // );
    const amount = new anchor.BN(0.1 * LAMPORTS_PER_SOL);

    await program.methods
      .deposit(amount)
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
    expect(difFromDeposit.toString()).toBe(amount.toString());
    //   });

    // const user = await createWallet();
    // display the user public key
    // console.log("User PublicKey:", user.publicKey.toBase58());
    // [vaultPda, vaultBump] = await anchor.web3.PublicKey.findProgramAddress(
    //   [Buffer.from("vault1")],
    //   program.programId
    // );
    const amount2 = new anchor.BN(0.01 * LAMPORTS_PER_SOL);

    await program.methods
      .withdraw(amount2)
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
    expect(difFromWithdraw.toString()).toBe(amount2.toString());
  });
});
