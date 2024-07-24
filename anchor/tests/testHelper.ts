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

// CONFIG

const getProgram = (T: any) => {
  return anchor.workspace[T] as Program<typeof T>;
};

const getConfig = async () => {
  const provider = anchor.AnchorProvider.env();

  const program = anchor.workspace.Solwin as Program<Solwin>;

  const owner = createKeyPairFromSecretKey(process.env.OWNER_PRIVATE_KEY!);
  return { provider, program, owner };
};

// keyPair & Wallet

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

type createKeyPair = (secrete: string) => anchor.web3.Keypair;

const createKeyPairFromSecretKey: createKeyPair = (secretKey: string) => {
  const secretKeyArray = JSON.parse(secretKey);
  const secretKeyUint8Array = Uint8Array.from(secretKeyArray);
  return Keypair.fromSecretKey(secretKeyUint8Array);
};

// Balances

const getBalance = async (provider: Provider, publicKey: PublicKey) => {
  const balance = await provider.connection.getBalance(publicKey);
  return balance;
};

// Utils

function convertBNToStrings(obj) {
  const convert = (input) => {
    if (Array.isArray(input)) {
      return input.map(convert);
    }

    if (input && typeof input === "object") {
      const newObj = {};
      for (const key in input) {
        if (input.hasOwnProperty(key)) {
          if (
            typeof input[key] === "object" &&
            input[key] instanceof anchor.BN
          ) {
            newObj[key] = input[key].toString();
          } else {
            newObj[key] = convert(input[key]);
          }
        }
      }
      return newObj;
    }
    return input;
  };
  return convert(obj);
}

export {
  convertBNToStrings,
  getProgram,
  getBalance,
  createWalletAndAirdrop,
  createKeyPairFromSecretKey,
  getConfig,
};
