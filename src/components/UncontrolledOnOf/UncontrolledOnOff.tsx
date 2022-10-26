import {memo, useState} from "react";

type PropsType = {
    onChangeOnOf: (on: boolean) => void
}

export const UncontrolledOnOff = memo((props: PropsType) => {
    const {onChangeOnOf} = props;
    const [on, setOn] = useState<boolean> (false);

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

    const changeHandler = (on: boolean) => {
        setOn(on);
        onChangeOnOf(on)
    }
    return (
        <div>
            <div onClick={() => changeHandler(true)} style={onStyle}>On</div>
            <div onClick={() => changeHandler(false)} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
});

