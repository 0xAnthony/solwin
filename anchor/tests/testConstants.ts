import BN from "bn.js";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

// increment these seeds and in constants.rs to force a new programId
const seed = {
  USER_SEED: "user37",
  MASTER_LOTTERY_SEED: "master_lottery37",
  LOTTERY_SEED: "lottery37",
  VAULT_SEED: "vault37",
  ROUND_SEED: "round37",
  TICKET_SEED: "ticket37",
  MINT_SEED: "mint37",
  METADATA_SEED: "metadata",
};
// at the moment only one price: 0.1 SOL
const TICKET_PRICE = new BN(0.1 * LAMPORTS_PER_SOL);
// round duration time in seconds (1 day), 10 sec for POC & testing
const ROUND_DURATION = new BN(10);
// window to close round around target : round start + ROUND_DURATION
// solution to replace CRON job till a solution for compilation
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

// token

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
