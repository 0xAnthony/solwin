// import * as anchor from "@coral-xyz/anchor";
// import { getAssociatedTokenAddressSync } from "@solana/spl-token";
// import { Keypair } from "@solana/web3.js";
// import * as web3 from "@solana/web3.js";
// import type { Solwin } from "../target/types/solwin";
// import assert from "assert";
// import BN from "bn.js";

// jest.setTimeout(30000); // 30 seconds timeout

// function createKeypairFromSecretKey(secretKey: string): Keypair {
//   const secretKeyArray = JSON.parse(secretKey);
//   const secretKeyUint8Array = Uint8Array.from(secretKeyArray);
//   return Keypair.fromSecretKey(secretKeyUint8Array);
// }
// //~/WebstormProjects/solana-program-library/owner.json
// const owner = createKeypairFromSecretKey(process.env.WALLET_PRIVATE_KEY);

// describe("spl program test", () => {
//   // Configure the client to use the local cluster.
//   // anchor.setProvider(anchor.AnchorProvider.env());

//   // const program = anchor.workspace.Spl as anchor.Program<Spl>;
//   const provider = anchor.AnchorProvider.env();
//   anchor.setProvider(provider);
//   const payer = provider.wallet as anchor.Wallet;
//   const program = anchor.workspace.Solwin as anchor.Program<Solwin>;

//   const METADATA_SEED = "metadata";
//   const TOKEN_METADATA_PROGRAM_ID = new web3.PublicKey(
//     "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
//   );

//   const MINT_SEED = "mint";
//   // const payer = program.provider.publicKey;
//   const metadata = {
//     name: "Net2Dev SPL Rewards Token",
//     symbol: "N2DR",
//     uri: "https://arweave.net/Xjqaj_rYYQGrsiTk9JRqpguA813w6NGPikcRyA1vAHM",
//     decimals: 9,
//   };
//   const mintAmount = 10;

//   const [mint] = web3.PublicKey.findProgramAddressSync(
//     [Buffer.from(MINT_SEED)],
//     program.programId
//   );

//   const [metadataAddress] = web3.PublicKey.findProgramAddressSync(
//     [
//       Buffer.from(METADATA_SEED),
//       TOKEN_METADATA_PROGRAM_ID.toBuffer(),
//       mint.toBuffer(),
//     ],
//     TOKEN_METADATA_PROGRAM_ID
//   );

//   it("Initialize", async () => {
//     const info = await program.provider.connection.getAccountInfo(mint);
//     if (info) {
//       return; // Do not attempt to initialize if already initialized
//     }
//     console.log("  Mint not found. Initializing Program...");

//     const context = {
//       metadata: metadataAddress,
//       mint,
//       payer: owner.publicKey, //payer,
//       rent: web3.SYSVAR_RENT_PUBKEY,
//       systemProgram: web3.SystemProgram.programId,
//       tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
//       tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
//     };

//     const txHash = await program.methods
//       .createToken(metadata)
//       .accounts(context)
//       .preInstructions([
//         anchor.web3.ComputeBudgetProgram.setComputeUnitLimit({
//           units: 3_000_000,
//         }),
//       ])
//       .rpc({
//         skipPreflight: true,
//       });

//     await program.provider.connection.confirmTransaction(txHash, "finalized");
//     console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);
//     const newInfo = await program.provider.connection.getAccountInfo(mint);
//     assert(newInfo, "  Mint should be initialized.");
//   });

//   it("mint tokens", async () => {
//     const destination = await anchor.utils.token.associatedAddress({
//       mint: mint,
//       owner: payer,
//     });

//     let initialBalance: number;

//     try {
//       const balance = await program.provider.connection.getTokenAccountBalance(
//         destination
//       );
//       initialBalance = balance.value.uiAmount;
//     } catch {
//       // Token account not yet initiated has 0 balance
//       initialBalance = 0;
//     }

//     const context = {
//       mint,
//       destination,
//       payer,
//       rent: web3.SYSVAR_RENT_PUBKEY,
//       systemProgram: web3.SystemProgram.programId,
//       tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
//       associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
//     };

//     const txHash = await program.methods
//       .mintTokens(new BN(mintAmount * 10 ** metadata.decimals))
//       .accounts(context)
//       .rpc();
//     await program.provider.connection.confirmTransaction(txHash);
//     console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);

//     const postBalance = (
//       await program.provider.connection.getTokenAccountBalance(destination)
//     ).value.uiAmount;
//     assert.equal(
//       initialBalance + mintAmount,
//       postBalance,
//       "Compare balances, it must be equal"
//     );
//   });
// });
