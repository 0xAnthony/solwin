// import * as anchor from "@coral-xyz/anchor";
// import { Program } from "@coral-xyz/anchor";
// import { Solwin } from "../target/types/solwin";
// import {
//   PublicKey,
//   Keypair,
//   SystemProgram,
//   LAMPORTS_PER_SOL,
// } from "@solana/web3.js";
// import dotenv from "dotenv";
// import { it } from "node:test";
// dotenv.config();

// jest.setTimeout(30000); // 30 seconds timeout

// async function getBalance(provider, publicKey) {
//   return await provider.connection.getBalance(publicKey);
// }

// // function createKeypairFromSecretKey(secretKeyBase58: string): Keypair {
// //   const secretKey = Uint8Array.from(Buffer.from(secretKeyBase58, "base58"));
// //   return Keypair.fromSecretKey(secretKey);
// // }

// function createKeypairFromSecretKey(secretKey: string): Keypair {
//   const secretKeyArray = JSON.parse(secretKey);
//   const secretKeyUint8Array = Uint8Array.from(secretKeyArray);
//   return Keypair.fromSecretKey(secretKeyUint8Array);
// }

// const vaultSeed = "solwin_vault12"; //10

// describe("solwin_vault", () => {
//   // Configure the client to use the local cluster.
//   const provider = anchor.AnchorProvider.env();
//   anchor.setProvider(provider);

//   const program = anchor.workspace.Solwin as Program<Solwin>;

//   //     // CREATION
//   //   it("Creates a Solwin Vault", async () => {
//   //     // Generate a keypair from the secret key
//   //     const user = createKeypairFromSecretKey(process.env.WALLET_PRIVATE_KEY);

//   //     // Generate a new keypair for the user
//   //     // const user = Keypair.generate();

//   //     // // Airdrop SOL to the user
//   //     // const airdropSignature = await provider.connection.requestAirdrop(
//   //     //   user.publicKey,
//   //     //   2 * LAMPORTS_PER_SOL
//   //     // );

//   //     // // Confirm the transaction using TransactionConfirmationStrategy
//   //     // const latestBlockhash = await provider.connection.getLatestBlockhash();
//   //     // await provider.connection.confirmTransaction({
//   //     //   signature: airdropSignature,
//   //     //   blockhash: latestBlockhash.blockhash,
//   //     //   lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
//   //     // });

//   //     // Check the balance of the user account
//   //     let balance = await getBalance(provider, user.publicKey);
//   //     console.log("User balance:", balanceBefore);

//   //     // If balance is less than the required amount, throw an error
//   //     if (balance < 2 * LAMPORTS_PER_SOL) {
//   //       throw new Error(
//   //         "Not enough SOL in the wallet. Please use a faucet or deposit SOL manually."
//   //       );
//   //     }

//   //     // Derive the PDA for the Solwin Vault
//   //     const [vaultPda, bump] = await anchor.web3.PublicKey.findProgramAddress(
//   //       [Buffer.from(vaultSeed)],
//   //       program.programId
//   //     );

//   //     console.log("User PublicKey:", user.publicKey.toBase58());
//   //     console.log("Vault PDA:", vaultPda.toBase58());

//   //     // Call the create_solwin_vault function
//   //     // await program.methods
//   //     //   .createSolwinVault()
//   //     //   .accounts({
//   //     //     solwinVault: vaultPda,
//   //     //     user: user.publicKey,
//   //     //     systemProgram: SystemProgram.programId,
//   //     //   })
//   //     //   .signers([user])
//   //     //   .simulate()
//   //     //   .then((simulatedResult) => {
//   //     //     console.log(simulatedResult.logs);
//   //     //   });
//   //     //   .rpc();

//   //     // Call the create_solwin_vault function with simulation
//   //     // try {
//   //     //   const result = await program.methods
//   //     //     .createSolwinVault()
//   //     //     .accounts({
//   //     //       solwinVault: vaultPda,
//   //     //       user: user.publicKey,
//   //     //       systemProgram: SystemProgram.programId,
//   //     //     })
//   //     //     .signers([user])
//   //     //     .simulate()
//   //     //     .rpc();
//   //     //   //.then((simulatedResult) => {
//   //     //   //  console.log(simulatedResult.logs);
//   //     //   //});
//   //     //
//   //     //   console.log(result.logs);
//   //     // } catch (error) {
//   //     //   console.error("Transaction simulation failed:", error);
//   //     // }

//   //     // Call the create_solwin_vault function with increased compute units
//   //     try {
//   //       const tx = await program.methods
//   //         .createSolwinVault()
//   //         .accounts({
//   //           solwinVault: vaultPda,
//   //           user: user.publicKey,
//   //           systemProgram: SystemProgram.programId,
//   //         })
//   //         .signers([user])
//   //         .preInstructions([
//   //           anchor.web3.ComputeBudgetProgram.setComputeUnitLimit({
//   //             units: 500_000,
//   //           }),
//   //         ])
//   //         .simulate()
//   //         .then((simulatedResult) => {
//   //           console.log(simulatedResult.logs);
//   //         });
//   //       //.rpc();

//   //       console.log("Transaction successful with tx:", tx);
//   //     } catch (error) {
//   //       console.error("Transaction failed:", error);
//   //     }

//   //     // Fetch the Solwin Vault account
//   //     //     try {
//   //     //       const vaultAccount = await program.account.solwinVault.fetch(vaultPda);
//   //     //       console.log("Solwin Vault Account:", vaultAccount);
//   //     //     } catch (error) {
//   //     //       console.error("Failed to fetch Solwin Vault account:", error);
//   //     //     }
//   //   });
//   it("Deposits SOL into the Solwin Vault", async () => {
//     // Generate a keypair from the secret key
//     const user = await createKeypairFromSecretKey(
//       process.env.WALLET_PRIVATE_KEY
//     );

//     // Check the balance of the user account
//     const balanceBefore = await getBalance(provider, user.publicKey);
//     console.log("User balance before deposit:", balanceBefore);

//     // If balance is less than the required amount, throw an error
//     if (balanceBefore < 2 * LAMPORTS_PER_SOL) {
//       throw new Error(
//         "Not enough SOL in the wallet. Please use a faucet or deposit SOL manually."
//       );
//     }

//     // Derive the PDA for the Solwin Vault
//     const [vaultPda, bump] = await anchor.web3.PublicKey.findProgramAddress(
//       [Buffer.from(vaultSeed)],
//       program.programId
//     );
//     const userKey = await user.publicKey.toBase58();

//     console.log("User PublicKey:", userKey);
//     console.log("Vault PDA:", vaultPda.toBase58());

//     // Call the create_solwin_vault function with simulation
//     // try {
//     //   // const result =
//     //   await program.methods
//     //     .createSolwinVault()
//     //     .accounts({
//     //       solwinVault: vaultPda,
//     //       user: user.publicKey,
//     //       systemProgram: SystemProgram.programId,
//     //     })
//     //     .signers([user])
//     //     .rpc();
//     // } catch (error) {
//     //   console.error("Transaction simulation failed:", error);
//     // }

//     try {
//       const tx = await program.methods
//         .createSolwinVault()
//         .accounts({
//           solwinVault: vaultPda,
//           user: user.publicKey,
//           systemProgram: SystemProgram.programId,
//         })
//         .signers([user])
//         .preInstructions([
//           anchor.web3.ComputeBudgetProgram.setComputeUnitLimit({
//             units: 500_000,
//           }),
//         ])
//         .rpc();
//       // .simulate()
//       // .then((simulatedResult) => {
//       //   console.log(simulatedResult.logs);
//       // });
//       //.rpc();

//       console.log("Transaction successful with tx:", tx);
//     } catch (error) {
//       console.error("Transaction failed:", error);
//     }
//     // const amountToDeposit = 0.005 * LAMPORTS_PER_SOL;
//     const amountToDeposit = await new anchor.BN(0.005 * LAMPORTS_PER_SOL);

//     // Call the deposit function
//     try {
//       const tx = await program.methods
//         .deposit(amountToDeposit)
//         .accounts({
//           solwinVault: vaultPda,
//           user: user.publicKey,
//           systemProgram: SystemProgram.programId,
//         })
//         .signers([user])
//         .rpc();

//       console.log("Transaction successful with tx:", tx);
//       // get the user balance after deposit
//       const balanceAfter = await getBalance(provider, user.publicKey);
//       console.log("User balance after deposit:", balanceAfter);
//     } catch (error) {
//       console.error("Transaction failed:", error);
//     }

//     //expect balance before deposit - balance after deposit to be >= to the amount deposited
//     // await expect(balanceBefore - balanceAfter).toBeGreaterThanOrEqual(
//     //   amountToDeposit
//     // );
//   });
// });
