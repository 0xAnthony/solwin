import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Solwin } from "../target/types/solwin";
import * as web3 from "@solana/web3.js";
import {
  PublicKey,
  Keypair,
  SystemProgram,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

import {
  convertBNToStrings,
  getBalance,
  createWalletAndAirdrop,
  createKeyPairFromSecretKey,
} from "./testHelper";
import {
  seed,
  TICKET_PRICE,
  ROUND_DURATION,
  CLOSE_SLOT,
  TOKEN_METADATA_PROGRAM_ID,
  metadata,
} from "./testConstants";

import { jest, describe, it, expect } from "@jest/globals";
import assert from "assert";
import BN from "bn.js";
import dotenv from "dotenv";
dotenv.config();
// Set 30 sec timeout for jest
jest.setTimeout(30000);

/*************************************************************************************
 *
 *      ATTENTION FOR CLEANUP
 *
 **************************************************************************************/
// add f_ or F prefix to function and types!! Don't miss it otherwise => call to old func == pb

// CLOSE_ROUND is skipped as it fail if already closed or with old round
// increments SEEDS suffix and remove skip to test it
/*************************************************************************************
 *
 *      PREPARING CONST & VARS
 *
 **************************************************************************************/
const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

const program = anchor.workspace.Solwin as Program<Solwin>;

//~/WebstormProjects/solana-program-library/owner.json
const owner = createKeyPairFromSecretKey(process.env.OWNER_PRIVATE_KEY || "");

// INCREMENT TO TEST NEW LOTTERY (id used for theses test, rename current ?)
const nextLotteryID = new BN(1); // default: 1
const nextRoundID = new BN(1); // default: 1

const initialLastLotteryId = 0;

const mintAmount = 10;
const burnAmount = 5;

// PDAs
const [masterLotteryPda, masterLotteryBump] =
  anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from(seed.MASTER_LOTTERY_SEED)],
    program.programId
  );

const [lotteryPda, curLotteryBump] =
  anchor.web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from(seed.LOTTERY_SEED),
      nextLotteryID.toArrayLike(Buffer, "le", 4),
    ],
    program.programId
  );

// const [masterLotteryPda, masterLotteryBump] = getPda(
//   "masterLottery",
//   MASTER_LOTTERY_SEED
// );

// const [lotteryPda, lotteryBump] = getPda("lottery", LOTTERY_SEED, newLotteryID);

const [roundPda, roundBump] = anchor.web3.PublicKey.findProgramAddressSync(
  [Buffer.from(seed.ROUND_SEED), nextRoundID.toArrayLike(Buffer, "le", 4)],
  program.programId
);

const [vaultPda, vaultBump] = anchor.web3.PublicKey.findProgramAddressSync(
  [Buffer.from(seed.VAULT_SEED), nextLotteryID.toArrayLike(Buffer, "le", 4)],
  program.programId
);

const [mintAccount] = web3.PublicKey.findProgramAddressSync(
  [Buffer.from(seed.MINT_SEED)],
  program.programId
);

const [metadataPDA, bumpPDA] = web3.PublicKey.findProgramAddressSync(
  [
    Buffer.from(seed.METADATA_SEED),
    TOKEN_METADATA_PROGRAM_ID.toBuffer(),
    mintAccount.toBuffer(),
  ],
  TOKEN_METADATA_PROGRAM_ID
);

// @todo export
// manage types: program : anchor.Program<Solwin> and anchor

//return [pda, bump]
const getGamePda = (seedString: string, seedIndex: anchor.BN) => {
  return anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from(seedString), seedIndex.toArrayLike(Buffer, "le", 4)],
    program.programId
  );
};

const getLastLotteryId = async () => {
  const info = await program.provider.connection.getAccountInfo(
    masterLotteryPda
  );

  if (!info) {
    console.error("masterLotteryPda not found. IT SHOULD BE INITIALIZED!");
    return;
  }

  let masterLotteryData = await program.account.fMasterLottery.fetch(
    masterLotteryPda
  );
  const lastLotteryId = masterLotteryData.lastLotteryId;
  return lastLotteryId;
};

const checkPdaIsNotInit = async (pda, pdaType) => {
  let info = await program.provider.connection.getAccountInfo(pda);
  if (info) {
    // SHOULDN'T PASS HERE
    console.error(`${pdaType} Pda found, IT SHOULDN'T!.`);
    let pdaData = await program.account[pdaType].fetch(pda);
    console.log(`${pdaType} pda info: `, info);
    console.log(`${pdaType} pda data: `, convertBNToStrings(pdaData));
    // return;
    throw `This Pda (${pdaType}) is not expected to be initialized`;
  }
};

const checkPdaIsInit = async (pda, pdaType) => {
  let info = await program.provider.connection.getAccountInfo(pda);
  if (info) {
    console.log(`${pdaType} Pda found:`);
    let newVaultData = await program.account[pdaType].fetch(pda);
    console.log(`${pdaType} info: `, info);
    console.log(`${pdaType} data: `, convertBNToStrings(newVaultData));
  } else {
    // console.error(`${pdaType} Pda not found. something wrong...`);
    throw `${pdaType} Pda not found. something wrong...`;
  }
};

const confirmAndShowTx = async (action: string, txHash: string) => {
  try {
    await program.provider.connection.confirmTransaction(txHash, "finalized");
  } catch (e) {
    const errMsg = `Error with: ${action}:\n`;
    console.log(errMsg, e);
  }
  console.log(
    `${action} tx: https://explorer.solana.com/tx/${txHash}?cluster=devnet`
  );
};
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
      console.log(
        `masterLottery data: `,
        convertBNToStrings(masterLotteryData)
      );
      return;
    }
    console.log("masterLottery Pda not found. Initializing Account...");

    let txHash = await program.methods
      .fInitializeSolwin(metadata)
      .accounts({
        user: owner.publicKey,
        system_program: web3.SystemProgram.programId,
        master_lottery: masterLotteryPda,
        metadata: metadataPDA,
        mint: mintAccount,
        payer: owner.publicKey,
        rent: web3.SYSVAR_RENT_PUBKEY,
        token_program: anchor.utils.token.TOKEN_PROGRAM_ID,
        token_metadata_program: TOKEN_METADATA_PROGRAM_ID,
      } as any)
      .preInstructions([
        anchor.web3.ComputeBudgetProgram.setComputeUnitLimit({
          units: 1_400_000,
        }),
      ])
      .signers([owner])
      .rpc({
        skipPreflight: true,
      });

    await confirmAndShowTx("masterLottery initialization", txHash);

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

  it("initializes a new lottery", async () => {
    const lastLotteryId: any = await getLastLotteryId();
    const newLotteryId = new BN(lastLotteryId + 1);
    console.log(
      `lastLotteryId: ${lastLotteryId} => new id for initialization: ${newLotteryId}`
    );

    const [newLotteryPda] = getGamePda(seed.LOTTERY_SEED, newLotteryId);
    await checkPdaIsNotInit(newLotteryPda, "fLottery");

    const [newVaultPda] = getGamePda(seed.VAULT_SEED, newLotteryId);
    await checkPdaIsNotInit(newVaultPda, "fVault");
    console.log(
      "Vault and lottery Pda not found as expected. Initializing accounts..."
    );

    const txHash = await program.methods
      .fInitializeLottery(TICKET_PRICE, ROUND_DURATION, CLOSE_SLOT)
      .accounts({
        lottery: newLotteryPda,
        master_lottery: masterLotteryPda,
        vault: newVaultPda,
        authority: owner.publicKey,
        system_program: web3.SystemProgram.programId,
        user: owner.publicKey,
      } as any)
      .signers([owner])
      .rpc();

    await confirmAndShowTx("lottery initialization", txHash);

    let newLotteryData = await program.account.fLottery.fetch(newLotteryPda);
    console.log(
      "lottery Pda data after initialization: ",
      convertBNToStrings(newLotteryData)
    );

    await checkPdaIsInit(newVaultPda, "fVault");

    expect(newLotteryData.id.toString()).toEqual(newLotteryId.toString());
    expect(newLotteryData.lastRoundId.toString()).toEqual("0");
    expect(newLotteryData.ticketPrice.toString()).toEqual(
      TICKET_PRICE.toString()
    );
  });

  it("initializes the lottery round", async () => {
    const currentLotteryId: any = await getLastLotteryId();
    console.log(`currentLotteryId: ${currentLotteryId}`);

    const [currentLotteryPda] = getGamePda(
      seed.LOTTERY_SEED,
      new BN(currentLotteryId)
    );

    await checkPdaIsInit(currentLotteryPda, "fLottery");

    let lotteryData = await program.account.fLottery.fetch(currentLotteryPda);
    const lastRoundId = lotteryData.lastRoundId;
    const newRoundId = lastRoundId + 1;
    console.log(
      `lastRoundId: ${lastRoundId} => new id for initialization: ${newRoundId}`
    );

    const [newRoundPda] = getGamePda(seed.ROUND_SEED, new BN(newRoundId));
    await checkPdaIsNotInit(newRoundPda, "fRound");

    console.log("round Pda not found. Initializing account...");

    const txHash = await program.methods
      .fInitializeRound()
      .accounts({
        round: newRoundPda,
        lottery: currentLotteryPda,
        authority: owner.publicKey,
        system_program: SystemProgram.programId,
      } as any)
      .rpc();

    confirmAndShowTx("round initialization", txHash);

    let roundData = await program.account.fRound.fetch(roundPda);
    console.log("round Pda data after initialization: ", roundData);

    expect(roundData.id).toEqual(newRoundId);
    expect(roundData.lastTicketId.toString()).toEqual("0");
    expect(roundData.ticketPrice.toString()).toEqual(TICKET_PRICE.toString());
    const roundStatus = Object.keys(roundData.status)[0];
    expect(roundStatus).toEqual("open");
  });
});

describe("Lottery: Deposit and Withdraw", () => {
  it("should deposit SOL, mint token to user and update credits", async () => {
    let vaultData;
    let vaultInfo = await program.provider.connection.getAccountInfo(vaultPda);
    if (vaultInfo) {
      console.log(`vault Pda found:`);
      vaultData = await program.account.fVault.fetch(vaultPda);
      console.log(`vault info: `, vaultInfo);
      console.log(`vault data: `, vaultData);
    } else {
      console.log("vault Pda not found. something wrong... Test will fail");
    }

    let vaultBalanceBeforeDeposit = await getBalance(provider, vaultPda);
    console.log(
      "Vault balance: BEFORE DEPOSIT: ",
      vaultBalanceBeforeDeposit.toString()
    );

    const destination = await anchor.utils.token.associatedAddress({
      mint: mintAccount,
      owner: owner.publicKey, //payer,
    });

    let initialBalance: number | null;
    try {
      const balance = await program.provider.connection.getTokenAccountBalance(
        destination
      );
      initialBalance = balance.value.uiAmount!; // ! => null
    } catch {
      // Token account not yet initiated has 0 balance
      initialBalance = 0;
    }
    console.log("token INIT balance of owner", initialBalance);

    const solAmount = 0.5;
    const amountToDeposit = new BN(solAmount * 10 ** 9);

    const [userDataPda, userDataBump] =
      anchor.web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from(seed.USER_SEED),
          nextLotteryID.toArrayLike(Buffer, "le", 4),
          owner.publicKey.toBuffer(),
        ],
        program.programId
      );

    let userDataInfo = await program.provider.connection.getAccountInfo(
      userDataPda
    );
    let userData;
    if (userDataInfo) {
      let userData = await program.account.userData.fetch(userDataPda);
      console.log(
        "Credits in user data before deposit: ",
        userData.credits.toString()
      );
    } else {
      console.error("UserDataPda not found. will be initialized during tx..");
    }

    const txHash = await program.methods
      .fDeposit(nextLotteryID, amountToDeposit)
      .accounts({
        lottery: lotteryPda,
        vault: vaultPda,
        user: owner.publicKey,
        user_data: userDataPda,
        signer: owner.publicKey,
        //   systemProgram: anchor.web3.SystemProgram.programId,
        mint: mintAccount,
        payer_mint_ata: destination,
        payer: owner.publicKey,
        rent: web3.SYSVAR_RENT_PUBKEY,
        system_program: web3.SystemProgram.programId,
        token_program: anchor.utils.token.TOKEN_PROGRAM_ID,
        associated_token_program: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
      } as any)
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

    try {
      await program.provider.connection.confirmTransaction(txHash, "finalized");
    } catch (e) {
      console.log("Error when initializing Depositing: ", e);
    }
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

    userData = await program.account.userData.fetch(userDataPda);
    console.log(
      "Credits in user data after deposit: ",
      userData.credits.toString()
    );
  });

  it("should withdraw SOL, burn token and decrease credits", async () => {
    const solAmount = 0.5;
    const amountToDeposit = new BN(solAmount * 10 ** 9); // amount in lamports
    const withdrawSolAmount = 0.25;
    const amountToWithdraw = new BN(withdrawSolAmount * 10 ** 9); // amount in lamports
    // const [vaultPda, vaultBump] = anchor.web3.PublicKey.findProgramAddressSync(
    //   [Buffer.from("vault22")],
    //   program.programId
    // );
    let vaultData;
    let vaultInfo = await program.provider.connection.getAccountInfo(vaultPda);
    if (vaultInfo) {
      console.log(`vault Pda found:`);
      vaultData = await program.account.fVault.fetch(vaultPda);
      console.log(`vault info: `, vaultInfo);
      console.log(`vault data: `, vaultData);
    } else {
      console.log("vault Pda not found. something wrong... Test will fail");
    }

    let vaultBalanceBeforeWithdraw = await getBalance(provider, vaultPda);
    console.log(
      "Vault balance: BEFORE WITHDRAWAL: ",
      vaultBalanceBeforeWithdraw.toString()
    );

    const origin = await anchor.utils.token.associatedAddress({
      mint: mintAccount,
      owner: owner.publicKey, //payer,
    });

    let initialBalance: number;

    try {
      const balance = await program.provider.connection.getTokenAccountBalance(
        origin
      );
      initialBalance = balance.value.uiAmount!; // ! =>
    } catch {
      // Token account not yet initiated has 0 balance
      initialBalance = 0;
    }
    console.log("token balance of owner BEFORE withdrawal", initialBalance);

    const [userDataPda, userDataBump] =
      anchor.web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from(seed.USER_SEED),
          nextLotteryID.toArrayLike(Buffer, "le", 4),
          owner.publicKey.toBuffer(),
        ],
        program.programId
      );

    // let userData = await program.account.userData.fetch(userDataPda);
    // console.log(
    //   "Credits in user data before withdrawal: ",
    //   userData.credits.toString()
    // );
    let userDataInfo = await program.provider.connection.getAccountInfo(
      userDataPda
    );
    let userData;
    if (userDataInfo) {
      let userData = await program.account.userData.fetch(userDataPda);
      console.log(
        "Credits in user data before deposit: ",
        userData.credits.toString()
      );
    } else {
      console.error("UserDataPda not found. will be initialized during tx..");
    }

    const txHash = await program.methods
      .fWithdraw(nextLotteryID, amountToWithdraw)
      .accounts({
        lottery: lotteryPda,
        vault: vaultPda,
        user: owner.publicKey,
        user_data: userDataPda,
        //   systemProgram: anchor.web3.SystemProgram.programId,
        mint: mintAccount,
        payer_mint_ata: origin,
        payer: owner.publicKey,
        rent: web3.SYSVAR_RENT_PUBKEY,
        system_program: web3.SystemProgram.programId,
        token_program: anchor.utils.token.TOKEN_PROGRAM_ID,
        associated_token_program: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
      } as any)
      .signers([owner]) //user
      .preInstructions([
        anchor.web3.ComputeBudgetProgram.setComputeUnitLimit({
          units: 500_000,
        }),
      ])
      .rpc();

    let vaultAccount = await program.account.fVault.fetch(vaultPda);
    // console.log("Vault balance:", vaultAccount.balance.toString());
    let vaultBalanceAfterWithdraw = await getBalance(provider, vaultPda);
    console.log(
      "Vault balance: AFTER WITHDRAW: ",
      vaultBalanceAfterWithdraw.toString()
    );
    let difFromWithdraw =
      vaultBalanceBeforeWithdraw - vaultBalanceAfterWithdraw;
    expect(difFromWithdraw.toString()).toBe(amountToWithdraw.toString());

    try {
      await program.provider.connection.confirmTransaction(txHash, "finalized");
    } catch (e) {
      console.log("Error when initializing Depositing: ", e);
    }
    console.log(`  https://explorer.solana.com/tx/${txHash}?cluster=devnet`);

    // token burned
    const postBalance = (
      await program.provider.connection.getTokenAccountBalance(origin)
    ).value.uiAmount;
    assert.equal(
      initialBalance - withdrawSolAmount,
      postBalance,
      "Compare balances after burning, it must be equal"
    );

    try {
      const balance = await program.provider.connection.getTokenAccountBalance(
        origin
      );
      initialBalance = balance.value.uiAmount!; // ! => null
    } catch {
      // Token account not yet initiated has 0 balance
      initialBalance = 0;
    }
    console.log("token balance of owner after withdrawal: ", initialBalance);

    userData = await program.account.userData.fetch(userDataPda);
    console.log(
      "Credits in user data after withdrawal: ",
      userData.credits.toString()
    );
  });
});

describe("Lottery: Take Ticket", () => {
  if (!masterLotteryPda || !lotteryPda || !roundPda) {
    console.error("!! PDAs not initialized !!, skipping tests");
    return;
  }

  it("Chekcs owner can take a ticket", async () => {
    const roundInfo = await program.provider.connection.getAccountInfo(
      roundPda
    );
    const roundData = await program.account.fRound.fetch(roundPda);

    console.log("round info: ", roundInfo);
    console.log("round data: ", roundData);

    const lastTicketId = roundData.lastTicketId;
    const newTicketId = new BN(lastTicketId + 1);
    console.log("id of the future ticket: ", newTicketId.toString());

    const [ticketPda, ticketBump] = await PublicKey.findProgramAddressSync(
      [Buffer.from(seed.TICKET_SEED), newTicketId.toArrayLike(Buffer, "le", 4)],
      program.programId
    );
    const ticketInfo = await program.provider.connection.getAccountInfo(
      ticketPda
    );

    console.log("ticketInfo data BEFORE  taking a ticket: ", ticketInfo);
    console.log("ticketPda data BEFORE  taking a ticket: ", ticketPda);

    const [userDataPda, userDataBump] =
      anchor.web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from(seed.USER_SEED),
          nextLotteryID.toArrayLike(Buffer, "le", 4),
          owner.publicKey.toBuffer(),
        ],
        program.programId
      );

    let userData = await program.account.userData.fetch(userDataPda);
    let creditsBefore = userData.credits.toString();

    console.log("Credits in user data before taking a ticket: ", creditsBefore);

    const txHash = await program.methods
      .fTakeTicket(nextLotteryID, nextRoundID)
      .accounts({
        lottery: lotteryPda,
        round: roundPda,
        ticket: ticketPda,
        buyer: owner.publicKey,
        system_program: SystemProgram.programId,
        userData: userDataPda,
      } as any)
      .signers([owner])
      .preInstructions([
        anchor.web3.ComputeBudgetProgram.setComputeUnitLimit({
          units: 1_400_000,
        }),
      ])
      .rpc({
        skipPreflight: true,
      });

    try {
      await program.provider.connection.confirmTransaction(txHash, "finalized");
    } catch (e) {
      console.log("Error when buying a ticket: ", e);
    }
    console.log(
      `ticket buy tx: https://explorer.solana.com/tx/${txHash}?cluster=devnet`
    );

    const ticketDataAfterBuy = await program.account.fTicket.fetch(ticketPda);
    console.log("ticketPda data AFTER  buy: ", ticketDataAfterBuy);
    const roundDataAfterBuy = await program.account.fRound.fetch(roundPda);
    console.log("round data: AFTER  buy: ", roundDataAfterBuy);

    expect(ticketDataAfterBuy.id.toString()).toEqual(newTicketId.toString());
    // expect(ticketDataAfterBuy.authority.toString()).toEqual(owner.publicKey);

    userData = await program.account.userData.fetch(userDataPda);
    let creditsAfter = userData.credits.toString();

    console.log("Credits in user data after taking a ticket: ", creditsAfter);
    expect((creditsBefore - creditsAfter).toString()).toEqual(
      TICKET_PRICE.toString()
    );
  });
});

describe("Lottery: Close Round", () => {
  // TEST FAILS IF ALREADY CLOSED as we test Status
  // manage round id in config of test to be abailble to run new round => init game..
  // and make a test to explicitly show failure if round is already closed

  it("should close the round", async () => {
    const masterLotteryInfo = await program.provider.connection.getAccountInfo(
      masterLotteryPda
    );
    const vaultInfo = await program.provider.connection.getAccountInfo(
      vaultPda
    );
    const lotteryInfo = await program.provider.connection.getAccountInfo(
      lotteryPda
    );
    const roundInfo = await program.provider.connection.getAccountInfo(
      roundPda
    );

    if (!masterLotteryInfo || !vaultInfo || !lotteryInfo || !roundInfo) {
      console.error(
        "!! PDAs not initialized !!, skipping tests as they will fail"
      );
      return;
    }

    const roundData = await program.account.fRound.fetch(roundPda);

    console.log("round info: ", roundInfo);
    console.log("round data: ", roundData);

    const roundStatus = Object.keys(roundData.status)[0];
    console.log("round status before closing: ", roundStatus);

    // next round pda
    const nextRoundID = new BN(roundData.id + 1);
    console.log("id of the future round: ", nextRoundID.toString());

    const [newRoundPda, newRoundBump] =
      anchor.web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from(seed.ROUND_SEED),
          nextRoundID.toArrayLike(Buffer, "le", 4),
        ],
        program.programId
      );
    const nextRoundInfo = await program.provider.connection.getAccountInfo(
      newRoundPda
    );
    if (nextRoundInfo) {
      console.error(
        `ATTENTION: nextRoundPda found, IT SHOULD NOT BE INITIALIZED YET`
      );
    }

    // userData pda of the closer
    const [userDataPda, userDataBump] =
      anchor.web3.PublicKey.findProgramAddressSync(
        [
          Buffer.from(seed.USER_SEED),
          nextLotteryID.toArrayLike(Buffer, "le", 4),
          owner.publicKey.toBuffer(),
        ],
        program.programId
      );

    let userData = await program.account.userData.fetch(userDataPda);
    let creditsBefore = userData.credits.toString();

    console.log("Credits in user data before taking a ticket: ", creditsBefore);

    const txHash = await program.methods
      .fCloseRound(nextLotteryID, nextRoundID)
      .accounts({
        lottery: lotteryPda,
        round: roundPda,
        system_program: SystemProgram.programId,
        // vault: vaultPda,
        closerData: userDataPda,
        authority: owner.publicKey,
        signer: owner.publicKey,
        nextRound: newRoundPda,
      } as any)
      .signers([owner]) //user
      .preInstructions([
        anchor.web3.ComputeBudgetProgram.setComputeUnitLimit({
          units: 1_400_000,
        }),
      ])
      .rpc({
        skipPreflight: true,
      });

    try {
      await program.provider.connection.confirmTransaction(txHash, "finalized");
    } catch (e) {
      console.log("Error when closing round: ", e);
    }
    console.log(
      `round close tx: https://explorer.solana.com/tx/${txHash}?cluster=devnet`
    );

    const roundDataAfterClose = await program.account.fRound.fetch(roundPda);
    console.log("round data: AFTER  close: ", roundDataAfterClose);

    const roundStatusAfterClose = Object.keys(roundDataAfterClose.status)[0];
    console.log("round status after closing: ", roundStatusAfterClose);

    expect(roundStatusAfterClose).toEqual("closed");
  });
});
