import {useEffect, useState} from "react";

export const Countdown = () => {
    const [count, setCount] = useState(3612);

    useEffect(() => {
        const interval = setInterval(() => {
            if (count) {
                setCount(count - 1);
            } else {
                clearInterval(interval)
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);

    return (
        <span className="countdown font-mono text-2xl">
            <span style={{"--value": Math.floor(count / 3600)}}></span>h
            <span style={{"--value": Math.floor(count % 3600 / 60)}}></span>m
            <span style={{"--value": count % 60 }}></span>s
        </span>
    );
};