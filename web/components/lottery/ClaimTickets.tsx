import {PublicKey, SystemProgram} from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import {Program} from "@coral-xyz/anchor";
import idl from "@/idl.json";
import {useAnchorProvider} from "@/components/solana/solana-provider";
import {useWallet} from "@solana/wallet-adapter-react";
import {useEffect, useState} from "react";
import {ROUND_SEED, TICKET_SEED, USER_SEED} from "@/constants";

export const ClaimTickets = ({swBalance, lotteryId, program, lotteryPda, userDataPda}) => {
    const wallet = useWallet();

    const claimTickets = async () => {
        let lotteryData = await program.account.fLottery.fetch(lotteryPda);
        const roundId = new anchor.BN(lotteryData.lastRoundId);

        const [roundPda, roundBump] = anchor.web3.PublicKey.findProgramAddressSync(
            [Buffer.from(ROUND_SEED), roundId.toArrayLike(Buffer, "le", 4)],
            program.programId
        );

        const roundData = await program.account.fRound.fetch(roundPda);

        const lastTicketId = roundData.lastTicketId;
        const newTicketId = new anchor.BN(lastTicketId + 1);

        const [ticketPda] = await PublicKey.findProgramAddressSync(
            [Buffer.from(TICKET_SEED), newTicketId.toArrayLike(Buffer, "le", 4)],
            program.programId
        );

        const [userDataPda] =
            anchor.web3.PublicKey.findProgramAddressSync(
                [
                    Buffer.from(USER_SEED),
                    lotteryId.toArrayLike(Buffer, "le", 4),
                    wallet.publicKey.toBuffer(),
                ],
                program.programId
            );

        const tx = await program.methods
            .fTakeTicket(lotteryId, roundId)
            .accounts({
                lottery: lotteryPda,
                round: roundPda,
                ticket: ticketPda,
                buyer: wallet.publicKey,
                system_program: SystemProgram.programId,
                userData: userDataPda,
            } as any)
            .rpc();

        console.log("Claimed tickets", tx)
    }

    return (
        <>
            <button className={`btn btn-secondary ${(!swBalance || swBalance.uiAmount === 0) && "btn-disabled"}`} onClick={claimTickets}>Claim tickets</button>
        </>
    );
};