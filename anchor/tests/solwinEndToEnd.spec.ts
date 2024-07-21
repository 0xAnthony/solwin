import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";

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
// import { describe, it } from "node:test";
// import { Console } from "console";
import { jest } from "@jest/globals";
// import { describe, it } from ""
// import { describe, it } from "node:test";

// Set 30 sec timeout for jest
jest.setTimeout(30000);

/*************************************************************************************
 *
 *      ATTENTION FOR CLEANUP
 *
 **************************************************************************************/
// add f_ or F prefix to function and types!! Don't miss it otherwise => call to old func == pb

/*************************************************************************************
 *
 *      PREPARING CONST & VARS
 *
 **************************************************************************************/
const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

const program = anchor.workspace.Solwin as Program<Solwin>;

// //~/WebstormProjects/solana-program-library/owner.json
const owner = createKeypairFromSecretKey(process.env.OWNER_PRIVATE_KEY);

// CHANGE THE SEED (+1) to test initialization of new accounts
const MASTER_LOTTERY_SEED = "master_lottery31";
const LOTTERY_SEED = "lottery31";
const ROUND_SEED = "round31";
const VAULT_SEED = "vault31";
// at the moment only one price: 0.1 SOL
const TICKET_PRICE = new BN(0.1 * LAMPORTS_PER_SOL);
// round duration time in seconds (1 day), 10 sec for testing
const ROUND_DURATION = new BN(10);
// window to close slot (to replace CRON job) in second
// ex: round: 24h, close slot: 10 minutes // 5 seconds for testing
// 2 minutes before the end of the round to be abble to catch up time if
// previous rounds cumulated delay
// incentive :
// ex: 25% reward at time till time + 2 minutes
// decreasing to 10% at t+-2minutes
// ponderation to be added according to late or early time on shedule
// min reward 5% till round is not closed
// const CLOSE_SLOT = new BN(600);
const CLOSE_SLOT = new BN(5);

// INCREMENT TO TEST NEW LOTTERY (id used for theses test, rename current ?)
const newLotteryID = new BN(1); // default: 1
const newRoundID = new BN(1); // default: 1

const initialLastLotteryId = 0;

// token
const MINT_SEED = "mint31";
const METADATA_SEED = "metadata";
// default metaplex token metadata program
// https://metaplex-foundation.github.io/metaplex-program-library/docs/token-metadata/index.html#accountProviders.__type.Metadata
const TOKEN_METADATA_PROGRAM_ID = new web3.PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);

const metadata = {
  name: "SolWin liquid SOL Token",
  symbol: "swSOL",
  uri: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png", //"https://arweave.net/Xjqaj_rYYQGrsiTk9JRqpguA813w6NGPikcRyA1vAHM",
  decimals: 9,
};
const mintAmount = 10;
const burnAmount = 5;

// PDAs
const [masterLotteryPda, masterLotteryBump] =
  anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from(MASTER_LOTTERY_SEED)],
    program.programId
  );

const [lotteryPda, lotteryBump] = anchor.web3.PublicKey.findProgramAddressSync(
  [Buffer.from(LOTTERY_SEED), newLotteryID.toArrayLike(Buffer, "le", 4)],
  program.programId
);

const [roundPda, roundBump] = anchor.web3.PublicKey.findProgramAddressSync(
  [Buffer.from(ROUND_SEED), newRoundID.toArrayLike(Buffer, "le", 4)],
  program.programId
);

const [vaultPda, vaultBump] = anchor.web3.PublicKey.findProgramAddressSync(
  [Buffer.from(VAULT_SEED), newLotteryID.toArrayLike(Buffer, "le", 4)],
  program.programId
);

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

/*************************************************************************************
 *
 *      TESTS
 *
 **************************************************************************************/
describe("Initializing Lottery", () => {
  it("initializes the master lottery", async () => {
    const info = await program.provider.connection.getAccountInfo(
      masterLotteryPda
    );

    if (info) {
      console.log(`masterLottery Pda found, skipping initialization.`);
      let masterLotteryData = await program.account.fMasterLottery.fetch(
        masterLotteryPda
      );
      console.log(`masterLottery info: `, info);
      console.log(`masterLottery data: `, masterLotteryData);
      return;
    }
    console.log("masterLottery Pda not found. Initializing Account...");

    // const info = await program.provider.connection.getAccountInfo(mintAccount);
    // if (info) {
    //   return; // Do not attempt to initialize if already initialized
    // }
    // console.log("  Mint not found. Initializing Program...");

    // const context = {
    //   payer: owner.publicKey, //payer,
    //   mint: mintAccount,
    //   metadata: metadataPDA,
    //   tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
    //   tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
    //   systemProgram: web3.SystemProgram.programId, //anchor.web3.SystemProgram.programId,
    //   rent: web3.SYSVAR_RENT_PUBKEY, //anchor.web3.SYSVAR_RENT_PUBKEY,
    // };

    let txHash = await program.methods
      .fInitializeSolwin(metadata)
      .accounts({
        user: owner.publicKey,
        systemProgram: web3.SystemProgram.programId,
        masterLottery: masterLotteryPda,
        metadata: metadataPDA,
        mint: mintAccount,
        payer: owner.publicKey,
        rent: web3.SYSVAR_RENT_PUBKEY, //anchor.web3.SYSVAR_RENT_PUBKEY,
        // payer: owner.publicKey, //payer,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
        tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
        // systemProgram: web3.SystemProgram.programId, //anchor.web3.SystemProgram.programId,
      } as any)
      .preInstructions([
        anchor.web3.ComputeBudgetProgram.setComputeUnitLimit({
          units: 1_400_000,
        }),
      ])
      .signers([owner]) // added as removed in program
      .rpc({
        skipPreflight: true,
      });

    try {
      await program.provider.connection.confirmTransaction(txHash, "finalized");
    } catch (e) {
      console.log("Error when initializing masterLottery: ", e);
    }
    console.log(
      `masterLottery initialization tx: https://explorer.solana.com/tx/${txHash}?cluster=devnet`
    );

    let masterLotteryData = await program.account.fMasterLottery.fetch(
      masterLotteryPda
    );
    console.log(
      "masterLottery Pda data after initialization: ",
      masterLotteryData
    );

    expect(masterLotteryData.lastLotteryId).toEqual(initialLastLotteryId);
    const newInfo = await program.provider.connection.getAccountInfo(
      mintAccount
    );
    assert(newInfo, "  Mint should be initialized.");
  });

  it("initializes the lottery", async () => {
    let masterLotteryData = await program.account.fMasterLottery.fetch(
      masterLotteryPda
    );
    const lastLotteryId = masterLotteryData.lastLotteryId;
    const newLotteryId = lastLotteryId + 1;
    console.log(
      `lastLotteryId: ${lastLotteryId} => new id for initialization: ${newLotteryId}`
    );

    let info = await program.provider.connection.getAccountInfo(
      masterLotteryPda
    );

    if (!info) {
      console.error("masterLotteryPda not found. NEED INITIALIZATION");
      return;
    }
    info = await program.provider.connection.getAccountInfo(lotteryPda);

    if (info) {
      console.log(`Lottery Pda found, skipping initialization.`);
      let lotteryPdaData = await program.account.fLottery.fetch(lotteryPda);
      console.log(`Lottery info: `, info);
      console.log(`Lottery data: `, lotteryPdaData);
      return;
    }
    console.log("  lottery Pda not found. Initializing account...");

    const txHash = await program.methods
      .fInitializeLottery(TICKET_PRICE, ROUND_DURATION, CLOSE_SLOT)
      .accounts({
        lottery: lotteryPda,
        masterLottery: masterLotteryPda,
        vault: vaultPda,
        // payer: owner.publicKey,
        authority: owner.publicKey,
        systemProgram: web3.SystemProgram.programId,
        user: owner.publicKey,
      } as any)
      .signers([owner])
      .rpc();

    try {
      await program.provider.connection.confirmTransaction(txHash, "finalized");
    } catch (e) {
      console.log("Error when initializing lottery: ", e);
    }
    console.log(
      `lottery initialization tx: https://explorer.solana.com/tx/${txHash}?cluster=devnet`
    );

    let lotteryData = await program.account.fLottery.fetch(lotteryPda);
    console.log("lottery Pda data after initialization: ", lotteryData);

    expect(lotteryData.id).toEqual(newLotteryId);
    expect(lotteryData.lastRoundId.toString()).toEqual("0");
    expect(lotteryData.ticketPrice.toString()).toEqual(TICKET_PRICE.toString());
  });

  it("initializes the lottery round", async () => {
    let lotteryData = await program.account.fLottery.fetch(lotteryPda);
    const lastRoundId = lotteryData.lastRoundId;
    const newRoundId = lastRoundId + 1;
    console.log(
      `lastRoundId: ${lastRoundId} => new id for initialization: ${newRoundId}`
    );

    let info = await program.provider.connection.getAccountInfo(lotteryPda);

    if (!info) {
      console.error("lotteryPda not found. NEED INITIALIZATION");
      return;
    }
    info = await program.provider.connection.getAccountInfo(roundPda);

    if (info) {
      console.log(`Lottery Pda found, skipping initialization.`);
      let roundPdaData = await program.account.fRound.fetch(roundPda);
      console.log(`round info: `, info);
      console.log(`round data: `, roundPdaData);
      return;
    }
    console.log("round Pda not found. Initializing account...");

    const txHash = await program.methods
      .fInitializeRound()
      .accounts({
        round: roundPda,
        lottery: lotteryPda,
        authority: owner.publicKey,
        systemProgram: SystemProgram.programId,
      } as any)
      .rpc();

    try {
      await program.provider.connection.confirmTransaction(txHash, "finalized");
    } catch (e) {
      console.log("Error when initializing round: ", e);
    }
    console.log(
      `round initialization tx: https://explorer.solana.com/tx/${txHash}?cluster=devnet`
    );

    let roundData = await program.account.fRound.fetch(roundPda);
    console.log("round Pda data after initialization: ", roundData);

    expect(roundData.id).toEqual(newRoundId);
    expect(roundData.lastTicketId.toString()).toEqual("0");
    expect(roundData.ticketPrice.toString()).toEqual(TICKET_PRICE.toString());
    const roundStatus = Object.keys(roundData.status)[0];
    expect(roundStatus).toEqual("open");
  });
});

// describe("Lottery: Buy Ticket", () => {
//   if (!masterLotteryPda || !lotteryPda || !roundPda) {
//     console.error("PDAs not initialized, skipping tests");
//     return;
//   }

//   it("Chekcs owner can buy a ticket", async () => {
//     const roundInfo = await program.provider.connection.getAccountInfo(
//       roundPda
//     );
//     const roundData = await program.account.round.fetch(roundPda);

//     console.log("round info: ", roundInfo);
//     console.log("round data: ", roundData);

//     const lastTicketId = roundData.lastTicketId;
//     const newTicketId = new BN(lastTicketId + 1);
//     console.log("id of the futur ticket: ", newTicketId.toString());

//     const [ticketPda, ticketBump] = await PublicKey.findProgramAddressSync(
//       [Buffer.from("ticket"), newTicketId.toArrayLike(Buffer, "le", 4)],
//       program.programId
//     );
//     const ticketInfo = await program.provider.connection.getAccountInfo(
//       ticketPda
//     );

//     console.log("ticketInfo data BEFORE  buy: ", ticketInfo);
//     console.log("ticketPda data BEFORE  buy: ", ticketPda);

//     const txHash = await program.methods
//       .buyTicket(newLotteryID, newRoundID)
//       .accounts({
//         round: roundPda,
//         lottery: lotteryPda,
//         ticket: ticketPda,
//         buyer: owner.publicKey,
//         systemProgram: SystemProgram.programId,
//       } as any)
//       .signers([owner])
//       .preInstructions([
//         anchor.web3.ComputeBudgetProgram.setComputeUnitLimit({
//           units: 1_400_000,
//         }),
//       ])
//       .rpc({
//         skipPreflight: true,
//       });

//     try {
//       await program.provider.connection.confirmTransaction(txHash, "finalized");
//     } catch (e) {
//       console.log("Error when buying a ticket: ", e);
//     }
//     console.log(
//       `ticket buy tx: https://explorer.solana.com/tx/${txHash}?cluster=devnet`
//     );

//     const ticketDataAfterBuy = await program.account.round.fetch(roundPda);
//     console.log("ticketPda data AFTER  buy: ", ticketDataAfterBuy);
//     const roundDataAfterBuy = await program.account.round.fetch(roundPda);
//     console.log("round data: AFTER  buy: ", roundDataAfterBuy);

//     expect(ticketDataAfterBuy.id.toString()).toEqual(newTicketId.toString());
//     // expect(ticketDataAfterBuy.authority.toString()).toEqual(owner.publicKey);
//   });
// });
