import {useEffect, useState} from "react";

function secondsUntilMidnight() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const differenceInMilliseconds = midnight.getTime() - now.getTime();
    return Math.floor(differenceInMilliseconds / 1000);
}

export const Countdown = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(secondsUntilMidnight())
        const interval = setInterval(() => {
            if (count) {
                setCount(count - 1);
            } else {
                setCount(secondsUntilMidnight())
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);

    return (
        <span className="countdown">
            <span style={{"--value": Math.floor(count / 3600)}}></span>h
            <span style={{"--value": Math.floor(count % 3600 / 60)}}></span>m
            <span style={{"--value": count % 60 }}></span>s
        </span>
    );
};