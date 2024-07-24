import {useGetBalance, useGetTokenAccounts} from "@/components/account/account-data-access";
import {useWallet} from "@solana/wallet-adapter-react";
import {LAMPORTS_PER_SOL} from "@solana/web3.js";
import {useMemo, useState} from "react";
import {SWSOL_MINTER} from "@/constants";
import {Program} from "@coral-xyz/anchor";
import idl from "@/idl.json";
import {useAnchorProvider} from "@/components/solana/solana-provider";
import * as anchor from "@coral-xyz/anchor";
import toast from "react-hot-toast";
import {ClaimTickets} from "@/components/lottery/ClaimTickets";
import {CloseRound} from "@/components/lottery/CloseRound";

const valueToUi = (value) => {
    return Math.round((value / LAMPORTS_PER_SOL) * 100000) / 100000
}

export const SwapWidget = () => {
    const provider = useAnchorProvider();
    const wallet = useWallet();

    const canClose = false;
    const [action, setAction] = useState("deposit");
    const [inputValue, setInputValue] = useState("");

    const setActionDeposit = () => {
        setInputValue("")
        setAction("deposit")
    }

    const setActionWithdraw = () => {
        setInputValue("")
        setAction("withdraw")
    }

    const setInputToValue = (e) => {
        setInputValue(e.target.value);
    }

    const setMax = () => {
        if (action === "deposit") {
            setInputValue((solBalance / LAMPORTS_PER_SOL).toString())
        } else {
            setInputValue(swSolBalance.uiAmount)
        }
    }

    const newLotteryID = new anchor.BN(1);

    const program = new Program(idl, provider);

    const USER_SEED = "user32";
    const MINT_SEED = "mint32";
    const LOTTERY_SEED = "lottery32";
    const VAULT_SEED = "vault32";
    const ROUND_SEED = "round36";

    const newRoundID = new anchor.BN(1);

    const [roundPda, roundBump] = anchor.web3.PublicKey.findProgramAddressSync(
        [Buffer.from(ROUND_SEED), newRoundID.toArrayLike(Buffer, "le", 4)],
        program.programId
    );

    const [lotteryPda] = anchor.web3.PublicKey.findProgramAddressSync(
        [Buffer.from(LOTTERY_SEED), newLotteryID.toArrayLike(Buffer, "le", 4)],
        program.programId
    );

    const [vaultPda] = anchor.web3.PublicKey.findProgramAddressSync(
        [Buffer.from(VAULT_SEED), newLotteryID.toArrayLike(Buffer, "le", 4)],
        program.programId
    );

    const [mintAccount] = anchor.web3.PublicKey.findProgramAddressSync(
        [Buffer.from(MINT_SEED)],
        program.programId
    );

    let userDataPda;
    if (wallet.publicKey) {
        [userDataPda] =
            anchor.web3.PublicKey.findProgramAddressSync(
                [
                    Buffer.from(USER_SEED),
                    newLotteryID.toArrayLike(Buffer, "le", 4),
                    wallet.publicKey.toBuffer(),
                ],
                program.programId
            );
    }


    const { publicKey: address } = useWallet();
    const {data: solBalance} = useGetBalance({ address });

    const {data: tokenAccounts} = useGetTokenAccounts({ address });

    const {swSolBalance} = useMemo(() => {
        if (!tokenAccounts) {
            return {}
        }

        let swSol = tokenAccounts.find(x => x.account.data.parsed.info.mint === SWSOL_MINTER);

        let res = {
            swSolBalance: undefined
        }

        if(swSol) {
            res.swSolBalance = swSol.account.data.parsed.info.tokenAmount
        }

        return res
        }, [tokenAccounts]);

    const submit = async () => {
        if (!address || !provider) {
            return;
        }

        try {
            const payer_mint_ata = await anchor.utils.token.associatedAddress({
                mint: mintAccount,
                owner: wallet.publicKey,
            });

            let value = parseFloat(inputValue) * LAMPORTS_PER_SOL;
            let bnValue = new anchor.BN(value);

            if (action === "deposit") {
                const tx = await program.methods
                    .fDeposit(newLotteryID, bnValue)
                    .accounts({
                        lottery: lotteryPda,
                        vault: vaultPda,
                        user: wallet.publicKey,
                        user_data: userDataPda,
                        signer: wallet.publicKey,
                        mint: mintAccount,
                        payer_mint_ata,
                        payer: wallet.publicKey,
                        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
                        system_program: anchor.web3.SystemProgram.programId,
                        token_program: anchor.utils.token.TOKEN_PROGRAM_ID,
                        associated_token_program: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
                    } as any)
                    .rpc();
                console.log("Deposit", tx)
            } else {
                const tx = await program.methods
                    .fWithdraw(newLotteryID, bnValue)
                    .accounts({
                        lottery: lotteryPda,
                        vault: vaultPda,
                        user: wallet.publicKey,
                        user_data: userDataPda,
                        mint: mintAccount,
                        payer_mint_ata,
                        payer: wallet.publicKey,
                        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
                        system_program: anchor.web3.SystemProgram.programId,
                        token_program: anchor.utils.token.TOKEN_PROGRAM_ID,
                        associated_token_program: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
                    } as any).rpc();
                console.log("Withdraw", tx)
            }
            setInputValue("");
            toast.success("Transaction success !")
        } catch {
            toast.error("An error occured");
        }

    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body gap-8">
                <div role="tablist" className="tabs tabs-lifted tabs-lg">
                    <a role="tab" className={`tab ${action === "deposit" && 'tab-active'}`} onClick={setActionDeposit}>Deposit</a>
                    <a role="tab" className={`tab ${action === "withdraw" && 'tab-active'}`} onClick={setActionWithdraw}>Withdraw</a>
                </div>
                    <label className="input input-bordered input-lg flex items-center pr-2">
                        <input type="text" className="grow" placeholder="Amount" value={inputValue} onChange={setInputToValue}/>
                        <button className="btn btn-secondary" onClick={setMax}>MAX</button>
                    </label>
                <div className="flex flex-col">
                    <h3>Balances :</h3>
                    <div className="flex justify-between">
                        {!!solBalance && <span>{valueToUi(solBalance)} SOL</span>}
                        {!!swSolBalance && <span>{swSolBalance.uiAmount} swSOL</span>}
                    </div>
                </div>
                <button className="btn btn-secondary" onClick={submit}>{action.toUpperCase()}</button>
                <p className="text-center">
                    Chances impact: +0.00%
                </p>
                <ClaimTickets
                    swBalance={swSolBalance}
                    program={program}
                    roundPda={roundPda}
                    lotteryPda={lotteryPda}

                    userDataPda={userDataPda}
                />
                <CloseRound
                    canClose={canClose}
                    program={program}
                    roundPda={roundPda}
                    lotteryPda={lotteryPda}

                    userDataPda={userDataPda}
                />
            </div>
        </div>
    );
};