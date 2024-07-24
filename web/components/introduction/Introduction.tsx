'use client'

import {useMemo, useState} from "react";
import {SWSOL_MINTER} from "@/constants";
import {useGetTokenAccounts} from "@/components/account/account-data-access";
import {useWallet} from "@solana/wallet-adapter-react";

export const Introduction = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const { publicKey: address } = useWallet();
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
            if (swSol.account.data.parsed.info.tokenAmount.uiAmount > 0 && currentStep === 0) {
                setCurrentStep(1);
            }
        }
        return res
    }, [tokenAccounts]);

    let steps = [
        {text: "Deposit funds", completed: swSolBalance && !!swSolBalance.uiAmount},
        {text: "Claim tickets", completed: false},
        {text: "Get drafted as a winner", completed: false},
        {text: "Enjoy your earnings !", completed: false}
    ]

    return (
        <div className="mt-8 flex items-center gap-8 justify-center">
            <div>
                <ul className="timeline timeline-vertical">
                    {steps.map(({text, completed}, index) => (
                        <li key={text}>
                            {index > 0 && <hr className={`${completed && "bg-primary"}`}/>}
                            {!(index % 2) && <div className="timeline-start timeline-box">{text}</div>}
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className={`${completed && "text-primary"} h-5 w-5`}>
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            {!!(index % 2) && <div className="timeline-end timeline-box">
                                {completed && "Hi"} {text}</div>}
                            {index < steps.length - 1 &&  <hr className={`${completed && "bg-primary"}`}/>}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="card bg-base-100 w-1/4 shadow-xl">
                <div className="card-body text-justify">
                    <h2 className="card-title">Current step : {steps[currentStep].text}</h2>
                    <h3 className="font-bold">What to do ?</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis vitae turpis interdum aliquam. Curabitur eros erat, mollis ut auctor at, fermentum vitae ex. Phasellus ac rhoncus metus. Nam ultrices in erat quis vestibulum. Donec non blandit enim. Aliquam dapibus mi at nulla mattis scelerisque.
                    </p>
                    <h3 className="font-bold">Knowledge</h3>
                    <p>
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi cursus aliquam urna, quis cursus dui tempor tempor. Duis id quam at diam luctus molestie. Nam molestie velit at sem sollicitudin, nec eleifend augue tincidunt. Curabitur sed odio sit amet arcu facilisis iaculis. Praesent id egestas ante. Nulla nec dictum felis.
                    </p>
                </div>
            </div>
        </div>
    );
};