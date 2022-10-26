import React, {KeyboardEvent, memo, useEffect, useRef} from "react";
import arrow from "../../../../img/select_arrow.png"
import s from "./SelectTitle.module.css"

type SelectTitlePropsType = {
    collapsed: boolean
    title: string
    onClickCollapsed: () => void
    onKeyUp: (e: KeyboardEvent<HTMLDivElement>) => void
};

export const SelectTitle: React.FC<SelectTitlePropsType> = memo((props) => {
    const {collapsed, title, onClickCollapsed, onKeyUp} = props;

    const titleDiv = useRef<HTMLDivElement>(null);
    useEffect(() => titleDiv.current?.focus(), [collapsed]);


    const styleArrow = collapsed ? s.arrowOpen : s.arrowClose;
    return (
        <div ref={titleDiv} tabIndex={0} className={s.title} onClick={onClickCollapsed} onKeyUp={onKeyUp}>
            <div>{title}</div>
            <div><img className={styleArrow} alt={'arrow'} src={arrow}/></div>
        </div>
    )});