import { AnchorProvider, Program } from '@coral-xyz/anchor';
import { Cluster, PublicKey } from '@solana/web3.js';
import solwinIDL from '../target/idl/solwin.json';
import type { Solwin } from '../target/types/solwin';
export { Solwin, solwinIDL };
export declare const solwin_PROGRAM_ID: PublicKey;
export declare function getsolwinProgram(provider: AnchorProvider): Program<Solwin>;
export declare function getsolwinProgramId(cluster: Cluster): PublicKey;
