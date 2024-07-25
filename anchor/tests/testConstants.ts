import BN from "bn.js";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

// SEEDS
// increment these seeds and in constants.rs to force a new programId
const seed = {
  USER_SEED: "user69",
  MASTER_LOTTERY_SEED: "master_lottery69",
  LOTTERY_SEED: "lottery69",
  VAULT_SEED: "vault69",
  ROUND_SEED: "round69",
  TICKET_SEED: "ticket69",
  MINT_SEED: "mint69",
  METADATA_SEED: "metadata",
};

// GAME PARAMETERS
// at the moment only one price: 0.1 SOL
const TICKET_PRICE = new BN(0.1 * LAMPORTS_PER_SOL);
// round duration time in seconds (1 day), 10 sec for POC & testing
const ROUND_DURATION = new BN(10);
// window to close round around target (= round start + ROUND_DURATION)
// solution to replace CRON job till a solution for compilation
// => ex: round: 24h, close slot: 10 minutes -> target +- 5 minutes (1/2 slot)
//   allows to close before to be able to catch up time if
//   previous rounds cumulated delay in order to keep a steady round cycle
// => incentive (ex):
// ex: 25% reward at target time
// decreasing to 10% at t+- 5 minutes
// add ponderation according to late or early time on schedule
// min reward 5% till round is not closed
// For POC and test: 5 secondes
const CLOSE_SLOT = new BN(5);

// TOKEN
// default metaplex token metadata program
// https://metaplex-foundation.github.io/metaplex-program-library/docs/token-metadata/index.html#accountProviders.__type.Metadata
const TOKEN_METADATA_PROGRAM_ID = new PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);
const metadata = {
  name: "SolWin liquid SOL Token",
  symbol: "swSOL",
  uri: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png", //"https://arweave.net/Xjqaj_rYYQGrsiTk9JRqpguA813w6NGPikcRyA1vAHM",
  decimals: 9,
};

export {
  seed,
  TICKET_PRICE,
  ROUND_DURATION,
  CLOSE_SLOT,
  TOKEN_METADATA_PROGRAM_ID,
  metadata,
};
