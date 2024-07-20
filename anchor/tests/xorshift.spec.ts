import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
// import { Bank } from "../target/types/bank";
import { Solwin } from "../target/types/solwin";
import { expect } from "@jest/globals";
import {
  getConfig,
  getProgram,
  getBalance,
  createWalletAndAirdrop,
  createKeypairFromSecretKey,
} from "./testHelper";

describe.skip("xorshift", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  //   const provider = anchor.AnchorProvider.env();
  //   const wallet = provider.wallet;
  const connection = provider.connection;
  const rngAccount = anchor.web3.Keypair.generate();

  const program = anchor.workspace.Solwin as Program<Solwin>;
  // //~/WebstormProjects/solana-program-library/owner.json
  const owner = createKeypairFromSecretKey(process.env.OWNER_PRIVATE_KEY);

  it("Initializes the RNG account", async () => {
    // Call the initialize function.
    await program.methods
      .initXorshift(new anchor.BN(1234), new anchor.BN(123456789))
      .accounts({
        rngAccount: rngAccount.publicKey,
        user: owner.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([rngAccount])
      .rpc();

    // Fetch the account to check if it is initialized correctly.
    const account = await program.account.rngAccount.fetch(
      rngAccount.publicKey
    );
    expect(account.xorshift32.state.toString()).toEqual("1234");
    expect(account.xorshift64.state.toString()).toEqual("123456789");
  });
  //   it("Generates a Xorshift32,  Xorshift64,  Xorshiftf64 numbers", async () => {
  //
  it("Generates a Xorshift32 number", async () => {
    // Call the generate_xorshift32 function.
    const tx = await program.methods
      .generateXorshift32()
      .accounts({
        rngAccount: rngAccount.publicKey,
      })
      .rpc();
    console.log("Xorshift32 tx: ", tx);

    // Fetch the account to check the state change.
    const account = await program.account.rngAccount.fetch(
      rngAccount.publicKey
    );
    console.log("Xorshift32: ", account.xorshift32.state.toString());
  });

  it("Generates a Xorshift64 number", async () => {
    // Call the generate_xorshift64 function.
    const tx = await program.methods
      .generateXorshift64()
      .accounts({
        rngAccount: rngAccount.publicKey,
      })
      .rpc();
    console.log("Xorshift64 tx: ", tx);

    // Fetch the account to check the state change.
    const account = await program.account.rngAccount.fetch(
      rngAccount.publicKey
    );
    console.log("Xorshift64: ", account.xorshift64.state.toString());
  });

  it("Generates a Xorshift64 number between 0 and 1", async () => {
    // Call the generate_xorshift64_f64 function.
    const rand_num = await program.methods
      .generateXorshift64F64()
      .accounts({
        rngAccount: rngAccount.publicKey,
      })
      .rpc();

    console.log("Xorshift64F64 tx: ", rand_num);

    const account = await program.account.rngAccount.fetch(
      rngAccount.publicKey
    );
    console.log("Xorshift64F64: ", account.xorshift64.state.toString());

    // expect(rand_num).toBeGreaterThanOrEqual(0);
    // expect(rand_num).toBeLessThanOrEqual(1);
  });
});
