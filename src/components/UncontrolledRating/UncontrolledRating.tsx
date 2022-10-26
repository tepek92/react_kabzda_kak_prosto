import React, {memo, useState} from "react";

// Мой вариант
// export function UncontrolledRating(props: RatingPropsType) {
//     let result = [];
//     for (let i = 1; i <= 5; i++) {
//         if (i <= props.value) result.push(<Star bold={true}/>);
//         else result.push(<Star bold={false}/>)
//     }
//
//     return (
//         <div>{result}</div>
//     )
// }
//Вариант из видео
export const UncontrolledRating = memo(() => {
    const [value, setValue] = useState(0);
    return (
        <div>
            <Star bold={value > 0} onClick={() => setValue(1)}/>
            <Star bold={value > 1} onClick={() => setValue(2)}/>
            <Star bold={value > 2} onClick={() => setValue(3)}/>
            <Star bold={value > 3} onClick={() => setValue(4)}/>
            <Star bold={value > 4} onClick={() => setValue(5)}/>
        </div>
    )
});

type StarPropsType = {
    bold: boolean
    onClick: () => void
};

const Star = memo((props: StarPropsType) => {
    return <span onClick={() => props.onClick()}> {props.bold ? <b>STAR </b> : "STAR "}</span>
});