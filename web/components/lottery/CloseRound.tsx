import {SystemProgram} from "@solana/web3.js";
import {Program} from "@coral-xyz/anchor";
import idl from "@/idl.json";
import * as anchor from "@coral-xyz/anchor";
import {useAnchorProvider} from "@/components/solana/solana-provider";
import {useWallet} from "@solana/wallet-adapter-react";
import {ROUND_SEED} from "@/constants";

export const CloseRound = ({canClose, program, lotteryPda, userDataPda, roundPda}) => {
    const wallet = useWallet();

    const closeRound = async () => {
        const newLotteryID = new anchor.BN(1);
        const newRoundID = new anchor.BN(1);
        const nextRoundID = new anchor.BN(newRoundID + 1)

        const [newRoundPda, newRoundBump] =
            anchor.web3.PublicKey.findProgramAddressSync(
                [Buffer.from(ROUND_SEED), nextRoundID.toArrayLike(Buffer, "le", 4)],
                program.programId
            );

        const tx = await program.methods
            .fCloseRound(newLotteryID, newRoundID)
            .accounts({
                lottery: lotteryPda,
                round: roundPda,
                system_program: SystemProgram.programId,
                // vault: vaultPda,
                closerData: userDataPda,
                authority: wallet.publicKey,
                signer: wallet.publicKey,
                nextRound: newRoundPda,
            } as any).rpc()

        console.log("Closed round :", tx)
    }

    return (
        <>
            <button className={`btn btn-secondary ${!canClose && "btn-disabled"}`} onClick={closeRound}>Close round</button>
        </>
    );
};