import React, {memo} from "react";

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: ValueType
    onClick: (value: ValueType) => void;
};
// Мой вариант
// export function Rating(props: RatingPropsType) {
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
export const Rating = memo((props: RatingPropsType) => {
    const {value, onClick} = props;
    return (
        <div>
            <Star id={1} bold={value > 0} onClickHandler={onClick}/>
            <Star id={2} bold={value > 1} onClickHandler={onClick}/>
            <Star id={3} bold={value > 2} onClickHandler={onClick}/>
            <Star id={4} bold={value > 3} onClickHandler={onClick}/>
            <Star id={5} bold={value > 4} onClickHandler={onClick}/>
        </div>
    )
});

type StarPropsType = {
    id: ValueType
    bold: boolean
    onClickHandler: (value: ValueType) => void
};

const Star = memo((props: StarPropsType) => {
    const onClickHandler = () => {
        props.onClickHandler(props.id)
    }
    return <span onClick={onClickHandler}> {props.bold ? <b>STAR </b> : "STAR "}</span>
});