import {PublicKey, SystemProgram} from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import {Program} from "@coral-xyz/anchor";
import idl from "@/idl.json";
import {useAnchorProvider} from "@/components/solana/solana-provider";
import {useWallet} from "@solana/wallet-adapter-react";
import {useEffect, useState} from "react";
import {TICKET_SEED, USER_SEED} from "@/constants";

export const ClaimTickets = ({swBalance, program, lotteryPda, userDataPda, roundPda}) => {
    const [currentTickets, setCurrentTickets] = useState(0);
    const wallet = useWallet();

    useEffect(() => {
        const fetchData = async () => {
            const newLotteryID = new anchor.BN(1);
            const roundInfo = await program.provider.connection.getAccountInfo(
                roundPda
            );
            const roundData = await program.account.fRound.fetch(roundPda);

            const lastTicketId = roundData.lastTicketId;
            const newTicketId = new anchor.BN(lastTicketId + 1);

            const [ticketPda, ticketBump] = await PublicKey.findProgramAddressSync(
                [Buffer.from(TICKET_SEED), newTicketId.toArrayLike(Buffer, "le", 4)],
                program.programId
            );
            const ticketInfo = await program.provider.connection.getAccountInfo(
                ticketPda
            );

            const [userDataPda, userDataBump] =
                anchor.web3.PublicKey.findProgramAddressSync(
                    [
                        Buffer.from(USER_SEED),
                        newLotteryID.toArrayLike(Buffer, "le", 4),
                        wallet.publicKey.toBuffer(),
                    ],
                    program.programId
                );

            let userData = await program.account.userData.fetch(userDataPda);
            let creditsBefore = userData.credits.toString();

            const txHash = await program.methods
                .fTakeTicket(newLotteryID, newRoundID)
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
        }

        fetchData().catch(console.error);
    }, [])

    const claimTickets = async () => {
        const newLotteryID = new anchor.BN(1);
        const newRoundID = new anchor.BN(1);
        const nextRoundID = new anchor.BN(newRoundID + 1)

        console.log(1)

        const roundData = await program.account.fRound.fetch(roundPda);

        console.log(roundData)

        const lastTicketId = roundData.lastTicketId;
        const newTicketId = new anchor.BN(lastTicketId + 1);

        const [ticketPda, ticketBump] = await PublicKey.findProgramAddressSync(
            [Buffer.from(TICKET_SEED), newTicketId.toArrayLike(Buffer, "le", 4)],
            program.programId
        );

        console.log({
            lottery: lotteryPda,
            round: roundPda,
            ticket: ticketPda,
            buyer: wallet.publicKey,
            system_program: SystemProgram.programId,
            userData: userDataPda,
        })

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
            <button className={`btn btn-secondary ${(!swBalance || swBalance.uiAmount === 0) && "btn-disabled"}`} onClick={claimTickets}>Claim tickets</button>
        </>
    );
};