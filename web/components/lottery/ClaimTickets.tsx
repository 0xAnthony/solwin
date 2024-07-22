import {PublicKey, SystemProgram} from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import {Program} from "@coral-xyz/anchor";
import idl from "@/idl.json";
import {useAnchorProvider} from "@/components/solana/solana-provider";
import {useWallet} from "@solana/wallet-adapter-react";

export const ClaimTickets = ({swBalance, program, lotteryPda, userDataPda, roundPda}) => {
    const wallet = useWallet();
    const TICKET_SEED = "ticket36";

    const claimTickets = async () => {
        const newLotteryID = new anchor.BN(1);
        const newRoundID = new anchor.BN(1);
        const nextRoundID = new anchor.BN(newRoundID + 1)

        const roundData = await program.account.fRound.fetch(roundPda);

        const lastTicketId = roundData.lastTicketId;
        const newTicketId = new anchor.BN(lastTicketId + 1);

        const [ticketPda, ticketBump] = await PublicKey.findProgramAddressSync(
            [Buffer.from(TICKET_SEED), newTicketId.toArrayLike(Buffer, "le", 4)],
            program.programId
        );

        const tx = await program.methods
            .fTakeTicket(newLotteryID, newRoundID)
            .accounts({
                lottery: lotteryPda,
                round: roundPda,
                ticket: ticketPda,
                buyer: wallet.publicKey,
                system_program: SystemProgram.programId,
                userData: userDataPda,
            } as any).rpc()

        console.log("Claimed tickets", tx)
    }

    return (
        <>
            <button className={`btn btn-secondary ${!swBalance && "btn-disabled"}`} onClick={claimTickets}>Claim tickets</button>
        </>
    );
};