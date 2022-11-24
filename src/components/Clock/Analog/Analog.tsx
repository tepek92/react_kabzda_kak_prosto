import React, {useEffect, useState} from "react";
import './Analog.css';

type AnalogPropsType = {
    day: Date
}

export const Analog: React.FC<AnalogPropsType> = (props) => {
    const {day} = props;

    const deg = 6;
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    let hrStyle = {transform: `rotateZ(${(hh) + (mm/12)}deg)`}
    let mnStyle = {transform: `rotateZ(${mm}deg)`}
    let scStyle = {transform: `rotateZ(${ss}deg)`}

    return (
        <div className="clock">
            <div className="hour">
                <div className="hr" id="hr" style={hrStyle}></div>
            </div>
            <div className="min">
                <div className="mn" id="mn" style={mnStyle}></div>
            </div>
            <div className="sec">
                <div className="sc" id="sc" style={scStyle}></div>
            </div>
        </div>
    )
}