import React, {memo, useCallback, useReducer, useState} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    title: string
};


export const UncontrolledAccordion = memo((props: AccordionPropsType) => {
    console.log("UncontrolledAccordion rendering")

    // const [collapsed, setCollapsed] = useState<boolean> (false);
    const [state, dispatch] = useReducer(reducer, {collapsed: false});

    // const onClickTitleCollapsed = () => dispatch({type: TOGGLE_COLLAPSED});
    // Не пересоздает функцию.
    // т.е. в AccordionTitle будет приходить всегда одна и та же фкнция
    // и не будет перерисовки из-за этого
    const onClickTitleCollapsed = useCallback(() => dispatch({type: TOGGLE_COLLAPSED}), []);

    return (
        <div>
            <AccordionTitle title={props.title} onClickTitleCollapsed={onClickTitleCollapsed}/>
            {!state.collapsed && <AccordionBody />}
        </div>
    )
})

type AccordionTitlePropsType = {
    title: string
    onClickTitleCollapsed: () => void
};

const AccordionTitle = memo((props: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")

    return <h3 onClick={props.onClickTitleCollapsed}>--{props.title}--</h3>
});

const AccordionBody = memo(() => {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
});

