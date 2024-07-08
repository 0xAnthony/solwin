import {useGetBalance, useGetTokenAccounts} from "@/components/account/account-data-access";
import {useWallet} from "@solana/wallet-adapter-react";
import {LAMPORTS_PER_SOL} from "@solana/web3.js";
import {useMemo, useState} from "react";
import {SWSOL_MINTER, WSOL_MINTER} from "@/constants";

const valueToUi = (value) => {
    return Math.round((value / LAMPORTS_PER_SOL) * 100000) / 100000
}

export const SwapWidget = () => {
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

    const setMax = () => {
        if (action === "deposit") {
            setInputValue(wSolBalance.uiAmount)
        } else {
            setInputValue(swSolBalance.uiAmount)
        }
    }

    const { publicKey: address } = useWallet();
    const {data: solBalance} = useGetBalance({ address });

    const {data: tokenAccounts} = useGetTokenAccounts({ address });

    const {wSolBalance, swSolBalance} = useMemo(() => {
        if (!tokenAccounts) {
            return {}
        }

        let wSol = tokenAccounts.find(x => x.account.data.parsed.info.mint === WSOL_MINTER);
        let swSol = tokenAccounts.find(x => x.account.data.parsed.info.mint === SWSOL_MINTER);

        let res = {
            wSolBalance: undefined,
            swSolBalance: undefined
        }

        if (wSol) {
            res.wSolBalance = wSol.account.data.parsed.info.tokenAmount
        }

        if(swSol) {
            res.swSolBalance = swSol.account.data.parsed.info.tokenAmount
        }

        return res
        }, [tokenAccounts]);

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body gap-8">
                <div role="tablist" className="tabs tabs-lifted tabs-lg">
                    <a role="tab" className={`tab ${action === "deposit" && 'tab-active'}`} onClick={setActionDeposit}>Deposit</a>
                    <a role="tab" className={`tab ${action === "withdraw" && 'tab-active'}`} onClick={setActionWithdraw}>Withdraw</a>
                </div>
                    <label className="input input-bordered flex items-center">
                        <input type="text" className="grow" placeholder="Amount" value={inputValue}/>
                        <button className="btn btn-primary btn-sm" onClick={setMax}>MAX</button>
                    </label>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        {!!solBalance && <span>{valueToUi(solBalance)} SOL</span>}
                        {!!wSolBalance && <span>{wSolBalance.uiAmount} wSOL</span>}
                    </div>
                    {!!swSolBalance && <span>{swSolBalance.uiAmount} swSOL</span>}
                </div>
                <button className="btn btn-primary">{action.toUpperCase()}</button>
            </div>
        </div>

    );
};