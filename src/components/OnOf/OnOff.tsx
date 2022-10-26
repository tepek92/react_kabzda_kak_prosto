import React, {memo} from "react";

type PropsType = {
    on: boolean
    onChangeOnOf: (on: boolean) => void
}

export const OnOff = memo((props: PropsType) => {
    const {on, onChangeOnOf} = props;

    const onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        margin: "20px 5px 0px 20px",
        backgroundColor: on ? "green" : ""
    };
    const offStyle ={
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: !on ? "red" : ""
    };
    const indicatorStyle = {
        marginLeft: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "red"

    }

    return (
        <div>
            <div onClick={() => onChangeOnOf(true)} style={onStyle}>On</div>
            <div onClick={() => onChangeOnOf(false)} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
});