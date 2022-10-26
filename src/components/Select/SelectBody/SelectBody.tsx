import React, {memo, MouseEvent} from "react";
import {ItemsType} from "../Select";
import s from "./SelectBody.module.css"


type AccordionBodyPropsType = {
    value: number
    valueHover: number
    items: Array<ItemsType>
    onClick: (id: number) => void
    onClickCollapsed: () => void
    onMouseHover: (valueHover: number) => void
}

export const SelectBody: React.FC<AccordionBodyPropsType> = memo((props) => {
    const {items, value, valueHover, onMouseHover, onClick, onClickCollapsed} = props;

    const itemsElements = items.map(i => {

        const style =
            i.value === value ? s.item + ' ' + s.active
                : i.value === valueHover ? s.item + ' ' + s.hover
                    : s.item;


        const onClickHandler = () => {
            onClickCollapsed();
            onClick(i.value);
        }

        const onMouseHandler = (e: MouseEvent<HTMLDivElement>) => {
            console.log(i.value)
            onMouseHover(i.value)
        }

        return <div
            key={i.value}
            className={style}
            onClick={onClickHandler}
            onMouseMove={onMouseHandler}
        >{i.title}</div>
    });

    return (
        <div className={s.body}>{itemsElements}</div>
    )
});