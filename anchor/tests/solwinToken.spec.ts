import * as anchor from "@coral-xyz/anchor";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import { Keypair } from "@solana/web3.js";
import * as web3 from "@solana/web3.js";
import type { Solwin } from "../target/types/solwin";
import assert from "assert";
import BN from "bn.js";

jest.setTimeout(30000); // 30 seconds timeout

function createKeypairFromSecretKey(secretKey: string): Keypair {
  const secretKeyArray = JSON.parse(secretKey);
  const secretKeyUint8Array = Uint8Array.from(secretKeyArray);
  return Keypair.fromSecretKey(secretKeyUint8Array);
}
//~/WebstormProjects/solana-program-library/owner.json
const owner = createKeypairFromSecretKey(process.env.OWNER_PRIVATE_KEY);

describe("spl program test", () => {
  // Configure the client to use the local cluster.
  // anchor.setProvider(anchor.AnchorProvider.env());

  // const program = anchor.workspace.Spl as anchor.Program<Spl>;
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const payer = provider.wallet as anchor.Wallet;
  const program = anchor.workspace.Solwin as anchor.Program<Solwin>;

  const METADATA_SEED = "metadata";
  // const TOKEN_METADATA_PROGRAM_ID = new anchor.web3.PublicKey(
  //   "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
  // );

  // default metaplex token metadata program
  // https://metaplex-foundation.github.io/metaplex-program-library/docs/token-metadata/index.html#accountProviders.__type.Metadata
  const TOKEN_METADATA_PROGRAM_ID = new web3.PublicKey(
    "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
  );
  //     uri: "https://raw.githubusercontent.com/solana-developers/program-examples/new-examples/tokens/tokens/.assets/spl-token.json",

  const MINT_SEED = "mint";
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
  // const [mint] = anchor.web3.PublicKey.findProgramAddressSync(
  //   [Buffer.from(MINT_SEED)],
  //   program.programId
  // );

  // const [metadataAddress] = anchor.web3.PublicKey.findProgramAddressSync(
  //   [
  //     Buffer.from(METADATA_SEED),
  //     TOKEN_METADATA_PROGRAM_ID.toBuffer(),
  //     mint.toBuffer(),
  //   ],
  //   TOKEN_METADATA_PROGRAM_ID
  // );
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

  it("Initialize", async () => {
    const info = await program.provider.connection.getAccountInfo(mintAccount);
    if (info) {
      return; // Do not attempt to initialize if already initialized
    }
    console.log("  Mint not found. Initializing Program...");

    const context = {
      payer: owner.publicKey, //payer,
      mint: mintAccount,
      metadata: metadataPDA,
      tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
      systemProgram: web3.SystemProgram.programId, //anchor.web3.SystemProgram.programId,
      rent: web3.SYSVAR_RENT_PUBKEY, //anchor.web3.SYSVAR_RENT_PUBKEY,
    };
    console.log("HEYEHEYEHEY");
    const txHash = await program.methods
      // .createToken(metadata)
      .createToken(metadata)
      .accounts(context)
      // .rpc()
      .preInstructions([
        anchor.web3.ComputeBudgetProgram.setComputeUnitLimit({
          units: 3_000_000,
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
    console.log("HEYEHEYEHEY HEYEHEYEHEY");
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

  it("mint tokens", async () => {
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

    const context = {
      mint: mintAccount,
      payer_mint_ata: destination,
      payer: owner.publicKey,
      rent: web3.SYSVAR_RENT_PUBKEY,
      systemProgram: web3.SystemProgram.programId,
      tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
    };

    const txHash = await program.methods
      .mintToken(new BN(mintAmount * 10 ** 9))
      .accounts(context)
      .rpc();
    await program.provider.connection.confirmTransaction(txHash);
    console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);

    const postBalance = (
      await program.provider.connection.getTokenAccountBalance(destination)
    ).value.uiAmount;
    assert.equal(
      initialBalance + mintAmount,
      postBalance,
      "Compare balances, it must be equal"
    );
  });

  it("burn tokens", async () => {
    const origin = await anchor.utils.token.associatedAddress({
      mint: mintAccount,
      owner: owner.publicKey, //payer,
    });

    let initialBalance: number | null;

    try {
      const balance = await program.provider.connection.getTokenAccountBalance(
        origin
      );
      initialBalance = balance.value.uiAmount;
    } catch {
      // Token account not yet initiated has 0 balance
      initialBalance = 0;
    }

    const context = {
      mint: mintAccount,
      payer_mint_ata: origin,
      payer: owner.publicKey,
      rent: web3.SYSVAR_RENT_PUBKEY,
      systemProgram: web3.SystemProgram.programId,
      tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
    };

    const txHash = await program.methods
      .burnToken(new BN(burnAmount * 10 ** 9))
      .accounts(context)
      .rpc();
    await program.provider.connection.confirmTransaction(txHash);
    console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);

    const postBalance = (
      await program.provider.connection.getTokenAccountBalance(origin)
    ).value.uiAmount;
    assert.equal(
      initialBalance - burnAmount,
      postBalance,
      "Compare balances after burning, it must be equal"
    );
  });
});
