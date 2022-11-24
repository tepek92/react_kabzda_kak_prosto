import React from "react";
import './Digital.css';


type DigitalPropsType = {
    day: Date
}

export const Digital: React.FC<DigitalPropsType> = (props) => {
    const {day} = props;
    const time = day.toLocaleTimeString()
    return (
        <div className="digital">{time}</div>
    )
}