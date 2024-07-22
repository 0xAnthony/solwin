import {useGetBalance, useGetTokenAccounts} from "@/components/account/account-data-access";
import {useAnchorWallet, useConnection, useWallet} from "@solana/wallet-adapter-react";
import {clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";
import {useMemo, useState} from "react";
import {SWSOL_MINTER} from "@/constants";
import {Program} from "@coral-xyz/anchor";
import idl from "../../../anchor/target/idl/solwin.json";
import {useAnchorProvider} from "@/components/solana/solana-provider";
import * as anchor from "@coral-xyz/anchor";

const valueToUi = (value) => {
    return Math.round((value / LAMPORTS_PER_SOL) * 100000) / 100000
}

export const SwapWidget = () => {
    const provider = useAnchorProvider();
    const wallet = useWallet();
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

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

    const { publicKey: address } = useWallet();
    const {data: solBalance} = useGetBalance({ address });


    const accounts = await connection.getParsedProgramAccounts(
        new PublicKey("HDSscGxWMK7enBDzByJWN7TGqkL7r3WjfTL4iQ38iyYW"),
        {
            filters: [
                {
                    dataSize: 165, // number of bytes
                },
                {
                    memcmp: {
                        offset: 0, // Offset where the mint address is stored in the account data
                        bytes: mintAddress, // Base58 encoded mint address
                    },
                },
            ],
        }

    console.log(vaultPda)
    const {data: totalInPool} = useGetBalance({ address: vaultPda });
    console.log(totalInPool)

    const {data: tokenAccounts} = useGetTokenAccounts({ address });

    const {swSolBalance} = useMemo(() => {
        if (!tokenAccounts) {
            return {}
        }

        let swSol = tokenAccounts.find(x => x.account.data.parsed.info.mint === SWSOL_MINTER);

        let res = {
            wSolBalance: undefined,
            swSolBalance: undefined
        }

        if(swSol) {
            res.swSolBalance = swSol.account.data.parsed.info.tokenAmount
        }

        return res
        }, [tokenAccounts]);

    const submit = async () => {
        if (!address) {
            return;
        }

        if (!provider) {
            return;
        }
        const program = new Program(idl, provider);

        const METADATA_SEED = "metadata";
        const TOKEN_METADATA_PROGRAM_ID = new anchor.web3.PublicKey(
            "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
        );
        const MINT_SEED = "mint4";

        const [mintAccount] = anchor.web3.PublicKey.findProgramAddressSync(
            [Buffer.from(MINT_SEED)],
            program.programId
        );

        const [vaultPda] = anchor.web3.PublicKey.findProgramAddressSync(
            [Buffer.from("vault28")],
            program.programId
        );

        const destination = await anchor.utils.token.associatedAddress({
            mint: mintAccount,
            owner: wallet.publicKey,
        });

        let ctx = {
            vault: vaultPda,
            user: wallet.publicKey,
            mint: mintAccount,
            payer_mint_ata: destination,
            payer: wallet.publicKey,
            rent: anchor.web3.SYSVAR_RENT_PUBKEY,
            systemProgram: anchor.web3.SystemProgram.programId,
            tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
            associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
        };

        let value = parseFloat(inputValue) * LAMPORTS_PER_SOL;
        let bnValue = new anchor.BN(value);

        if (action === "deposit") {
            // const metadata = {
                //     name: "Net2Dev SPL Rewards Token",
                //     symbol: "N2DR",
                //     uri: "https://arweave.net/Xjqaj_rYYQGrsiTk9JRqpguA813w6NGPikcRyA1vAHM",
                //     decimals: 9,
                // };
                //
                // const [metadataPDA, bumpPDA] = anchor.web3.PublicKey.findProgramAddressSync(
                //     [
                //         Buffer.from(METADATA_SEED),
                //         TOKEN_METADATA_PROGRAM_ID.toBuffer(),
                //         mintAccount.toBuffer(),
                //     ],
                //     TOKEN_METADATA_PROGRAM_ID
                // );
                //
                // let ctx = {
                //     vault: vaultPda,
                //     user: wallet.publicKey,
                //     payer: wallet.publicKey, //payer,
                //     mint: mintAccount,
                //     metadata: metadataPDA,
                //     tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
                //     tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
                //     systemProgram: anchor.web3.SystemProgram.programId,
                //     rent: anchor.web3.SYSVAR_RENT_PUBKEY,
                // };
                //
                // let txCreate = await program.methods.createSolwinApp(metadata).accounts(ctx).rpc();

                let tx = await program.methods.depositSolwinApp(bnValue).accounts(ctx).rpc();
            console.log("Deposit", tx)
        } else {
            let tx = await program.methods.withdrawSolwinApp(bnValue).accounts(ctx).rpc();
            console.log("Withdraw", tx)
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
            </div>
        </div>
    );
};