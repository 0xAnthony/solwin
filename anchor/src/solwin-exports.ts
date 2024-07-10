// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor';
import { Cluster, PublicKey } from '@solana/web3.js';
import solwinIDL from '../target/idl/solwin.json';
import type { Solwin } from '../target/types/solwin';

// Re-export the generated IDL and type
export { Solwin, solwinIDL };

// The programId is imported from the program IDL.
export const solwin_PROGRAM_ID = new PublicKey(solwinIDL.address);

// This is a helper function to get the solwin Anchor program.
export function getsolwinProgram(provider: AnchorProvider) {
  return new Program(solwinIDL as Solwin, provider);
}

// This is a helper function to get the program ID for the solwin program depending on the cluster.
export function getsolwinProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
      // This is the program ID for the solwin program on devnet and testnet.
      return new PublicKey('ETMR2uxTjbFDYrhaQcPRJZyAYNDdSDcuCDg4doTvqPXv');
    case 'mainnet-beta':
    default:
      return solwin_PROGRAM_ID;
  }
}
