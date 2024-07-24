import * as anchor from "@coral-xyz/anchor";
import { Program, Provider } from "@coral-xyz/anchor";
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

// const program = anchor.workspace.Solwin as Program<Solwin>;

// let seedVaultCounter = 8;

// export const getSeedVaultCounter = () => {
//   return seedVaultCounter;
// };

// ??

// return [pda, bump]
// const getPda = (type: String, seed: String, index?: anchor.BN) => {
//   let seeds;
//   if (type == "masterLottery") {
//     seeds = [Buffer.from(seed)];
//   } else {
//     seeds = [Buffer.from(seed), index.toArrayLike(Buffer, "le", 4)];
//   }
//   return anchor.web3.PublicKey.findProgramAddressSync(
//     [...seeds],
//     program.programId
//   );
// return [pda, bump];
// };

const getProgram = (T: any) => {
  return anchor.workspace[T] as Program<typeof T>;
};

const getBalance = async (provider: Provider, publicKey: PublicKey) => {
  const balance = await provider.connection.getBalance(publicKey);
  return balance;
};

const createWalletAndAirdrop = async (
  program: Program,
  amountInSol: number
): Promise<Keypair> => {
  const wallet = new Keypair();
  let tx = await program.provider.connection.requestAirdrop(
    wallet.publicKey,
    amountInSol * LAMPORTS_PER_SOL
  );
  await program.provider.connection.confirmTransaction(tx);
  return wallet;
};

//  function createKeypairFromSecretKey(secretKey: string): Keypair {
//     const secretKeyArray = JSON.parse(secretKey);
//     const secretKeyUint8Array = Uint8Array.from(secretKeyArray);
//     return Keypair.fromSecretKey(secretKeyUint8Array);
//  }

const createKeyPairFromSecretKey = (secretKey: string) => {
  const secretKeyArray = JSON.parse(secretKey);
  const secretKeyUint8Array = Uint8Array.from(secretKeyArray);
  return Keypair.fromSecretKey(secretKeyUint8Array);
};

// config
const getConfig = async () => {
  const provider = anchor.AnchorProvider.env();

  const program = anchor.workspace.Solwin as Program<Solwin>;

  const owner = createKeyPairFromSecretKey(process.env.OWNER_PRIVATE_KEY!);
  return { provider, program, owner };
};
// module.exports = {
//   getProgram,
//   getBalance,
//   createWalletAndAirdrop,
//   createKeypairFromSecretKey,
//   provider,
//   program,
//   owner,
// };
export {
  getProgram,
  // getPda,
  getBalance,
  createWalletAndAirdrop,
  createKeyPairFromSecretKey,
  getConfig,
};
