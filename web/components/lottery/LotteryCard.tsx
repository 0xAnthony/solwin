import {useEffect, useRef} from "react";
import {Countdown} from "@/components/lottery/Countdown";

export const LotteryCard = () => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center">Next draw : <Countdown/></h2>
                <div>
                    <h3>Last draw :</h3>
                        <div>
                            Amount: 1 SOL
                        </div>
                        <div>
                            winner : abcd...wxyz
                        </div>
                </div>
            </div>
        </div>
    );
};