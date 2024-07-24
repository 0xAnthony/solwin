import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Solwin } from "../target/types/solwin";
import { PublicKey } from "@solana/web3.js";
import { describe, it, expect } from "@jest/globals";

describe("counter", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const payer = provider.wallet as anchor.Wallet;

  const program = anchor.workspace.Solwin as Program<Solwin>;
  const reservePublicKey = new PublicKey(
    "CsZYQfVQxcbyRhtVyEYTW8xXuJ7hY3h729GMpe8Zhm11"
  );

  it("Get exchante_rate", async () => {
    const currentRate = await program.methods
      .getExchangeRate()
      .accounts({
        reserveAccount: reservePublicKey,
      })
      .rpc();

    console.log("Current Exchange Rate:", currentRate);

    // Perform the assertion
    expect(currentRate).toBeDefined();
  });
});
