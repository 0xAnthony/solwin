import {useGetBalance, useGetTokenAccounts} from "@/components/account/account-data-access";
import {useWallet} from "@solana/wallet-adapter-react";
import {LAMPORTS_PER_SOL} from "@solana/web3.js";
import {useMemo, useState} from "react";

const valueToUi = (value) => {
    return Math.round((value / LAMPORTS_PER_SOL) * 100000) / 100000
}

export const SwapWidget = () => {
    const [action, setAction] = useState("deposit");

    const { publicKey: address } = useWallet();
    const {data: solBalance} = useGetBalance({ address });

    const tokenAccounts = useGetTokenAccounts({ address });
    const wSolBalance = useMemo(() => {
        if (!tokenAccounts.data) {
            return undefined
        }
        let accounts = tokenAccounts.data.filter(x => x.account.data.parsed.info.mint === "So11111111111111111111111111111111111111112");
        if (accounts.length) {
            return accounts[0].account.data.parsed.info.tokenAmount
        }
        return 0
        }, [tokenAccounts.data]);

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body gap-8">
                <div role="tablist" className="tabs tabs-lifted tabs-lg">
                    <a role="tab" className={`tab ${action === "deposit" && 'tab-active'}`}
                       onClick={() => {setAction("deposit")}}
                    >Deposit</a>
                    <a role="tab" className={`tab ${action === "withdraw" && 'tab-active'}`}
                       onClick={() => {setAction("withdraw")}}
                    >Withdraw</a>
                </div>
                <div className="flex gap-4">
                    <input type="text" placeholder="Amount" className="input input-bordered w-full max-w-xs" />
                    <button className="btn btn-primary">MAX</button>
                </div>
                <div className="flex flex-col">
                    {!!solBalance && <span>{valueToUi(solBalance)} SOL</span>}
                    {!!wSolBalance && <span>{wSolBalance.uiAmount} wSOL</span>}
                </div>
                <button className="btn btn-primary">{action.toUpperCase()}</button>
            </div>
        </div>

    );
};