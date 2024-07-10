import * as anchor from '@coral-xyz/anchor';
import { Program } from '@coral-xyz/anchor';
import { Solwin } from '../target/types/solwin';
import {ParsedAccountData, PublicKey} from "@solana/web3.js";
import type {Reserve} from "@solana/spl-token-lending";

describe('counter', () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const payer = provider.wallet as anchor.Wallet;

  const program = anchor.workspace.Solwin as Program<Solwin>;
  const reservePublicKey = new PublicKey("CsZYQfVQxcbyRhtVyEYTW8xXuJ7hY3h729GMpe8Zhm11");

  it('Get exchante_rate', async () => {
      const currentRate = await program.methods
          .getExchangeRate()
          .accounts({
              reserveAccount: reservePublicKey,
          })
          .view();

      console.log('Current Exchange Rate: :', currentRate);

      // Perform the assertion
      expect(currentRate).toBeDefined();
  });



  // it('Initialize Counter', async () => {
  //   await program.methods
  //     .initialize()
  //     .accounts({
  //       counter: counterKeypair.publicKey,
  //       payer: payer.publicKey,
  //     })
  //     .signers([counterKeypair])
  //     .rpc();
  //
  //   const currentCount = await program.account.counter.fetch(
  //     counterKeypair.publicKey
  //   );
  //
  //   expect(currentCount.count).toEqual(0);
  // });
  //
  // it('Increment Counter', async () => {
  //   await program.methods
  //     .increment()
  //     .accounts({ counter: counterKeypair.publicKey })
  //     .rpc();
  //
  //   const currentCount = await program.account.counter.fetch(
  //     counterKeypair.publicKey
  //   );
  //
  //   expect(currentCount.count).toEqual(1);
  // });
  //
  // it('Increment Counter Again', async () => {
  //   await program.methods
  //     .increment()
  //     .accounts({ counter: counterKeypair.publicKey })
  //     .rpc();
  //
  //   const currentCount = await program.account.counter.fetch(
  //     counterKeypair.publicKey
  //   );
  //
  //   expect(currentCount.count).toEqual(2);
  // });
  //
  // it('Decrement Counter', async () => {
  //   await program.methods
  //     .decrement()
  //     .accounts({ counter: counterKeypair.publicKey })
  //     .rpc();
  //
  //   const currentCount = await program.account.counter.fetch(
  //     counterKeypair.publicKey
  //   );
  //
  //   expect(currentCount.count).toEqual(1);
  // });
  //
  // it('Set counter value', async () => {
  //   await program.methods
  //     .set(42)
  //     .accounts({ counter: counterKeypair.publicKey })
  //     .rpc();
  //
  //   const currentCount = await program.account.counter.fetch(
  //     counterKeypair.publicKey
  //   );
  //
  //   expect(currentCount.count).toEqual(42);
  // });
  //
  // it('Set close the counter account', async () => {
  //   await program.methods
  //     .close()
  //     .accounts({
  //       payer: payer.publicKey,
  //       counter: counterKeypair.publicKey,
  //     })
  //     .rpc();
  //
  //   // The account should no longer exist, returning null.
  //   const userAccount = await program.account.counter.fetchNullable(
  //     counterKeypair.publicKey
  //   );
  //   expect(userAccount).toBeNull();
  // });
});
