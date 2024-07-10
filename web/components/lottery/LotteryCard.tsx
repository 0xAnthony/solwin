import {Countdown} from "@/components/lottery/Countdown";

export const LotteryCard = () => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center font-bold underline">Draws</h2>
                <div className="flex flex-col justify-around h-full gap-4">
                    <div>
                        <h2 className="text-center underline font-bold mb-2">Next</h2>
                        <div className="stats shadow w-full">
                            <div className="join join-vertical w-full">
                                <div className="join-item flex">
                                    <div className="stat" style={{borderRightWidth: "1px"}}>
                                        <div className="stat-title">Time left</div>
                                        <div className="stat-value">
                                            <Countdown/>
                                        </div>
                                    </div>
                                    <div className="stat w-2/6">
                                        <div className="stat-title">Your chances</div>
                                        <div className="stat-value">10.0%</div>
                                    </div>
                                </div>

                                <div className="join-item flex" style={{borderTopWidth: "1px"}}>
                                    <div className="stat" style={{borderRightWidth: "1px"}}>
                                        <div className="stat-title">Reward</div>
                                        <div className="stat-value">~1.5 SOL</div>
                                    </div>
                                    <div className="stat w-2/6">
                                        <div className="stat-title">Participants</div>
                                        <div className="stat-value">4,620</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-center underline font-bold mb-2">Last</h3>

                        <div className="stats shadow w-full">
                            <div className="join join-vertical w-full">
                                <div className="join-item">
                                    <div className="stat">
                                        <div className="stat-title">Winner</div>
                                        <div className="stat-value text-center">abcd...wxyz</div>
                                    </div>
                                </div>
                                <div className="join-item flex" style={{borderTopWidth: "1px"}}>
                                    <div className="stat" style={{borderRightWidth: "1px"}}>
                                        <div className="stat-title">Reward</div>
                                        <div className="stat-value">1 SOL</div>
                                    </div>
                                    <div className="stat">
                                        <div className="stat-title">Participants</div>
                                        <div className="stat-value">4,200</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};