import React, {useEffect, useState} from "react";

export default {
    title: 'Use Effect and Set Timeout',
}

export function UseEffectSetTimeout() {
    console.log('rendering');

    const [time, setTime] = useState('');


    useEffect(() => {
        console.log('tik')

        setInterval(() => {
            const time = new Date();
            setTime(time.toLocaleTimeString())
        }, 1000);
    }, []);

    return (
        <div>
            <div>{time}</div>
        </div>
    )
}