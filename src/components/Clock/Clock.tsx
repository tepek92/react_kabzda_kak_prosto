import React, {useEffect, useState} from "react";
import {Analog} from "./Analog/Analog";
import {Digital} from "./Analog/Digital/Digital";

export const Clock: React.FC = () => {
    const [day, setDay] = useState(new Date());
    const [modeClock, setModeClock] = useState<'digital' | 'analog'>('digital')

    useEffect(() => {
        const id = setInterval(() => {
            setDay(new Date());
        }, 1000);

        return () => clearInterval(id);
    }, [])

    const onClickHandler = () => {
        setModeClock(modeClock === 'digital' ? 'analog' : 'digital');
    }
    const nameButton = modeClock === 'digital' ? 'analog' : 'digital';
    return (
        <div>
            <button onClick={onClickHandler}>{nameButton}</button>
            {modeClock === 'analog' && <Analog day={day}/>}
            {modeClock === 'digital' && <Digital day={day}/>}
        </div>
    )
}