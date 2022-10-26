import React, {memo} from "react";

export type ItemsType = {
    id: number
    title: string
}

type AccordionPropsType = {
    title: string,
    collapsed: boolean
    onClickCollapsed: () => void
    items: Array<ItemsType>
    onClick: (id: number) => void
};
export const Accordion = memo((props: AccordionPropsType) => {
    const {title, collapsed, items, onClick, onClickCollapsed} = props;
    return (
        <div>
            <AccordionTitle title={title}  onClickCollapsed={onClickCollapsed} />
            {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
        </div>
    )
});

// -------------------

type AccordionTitlePropsType = {
    title: string
    onClickCollapsed: () => void
};

const AccordionTitle = memo((props: AccordionTitlePropsType) => {
    const {title, onClickCollapsed} = props;
    return <h3 onClick={onClickCollapsed}>--{title}--</h3>
});
// -------------------

type AccordionBodyPropsType = {
    items: Array<ItemsType>
    onClick: (id: number) => void
}
const AccordionBody = memo((props: AccordionBodyPropsType) => {
    const {items, onClick} = props;


    const itemsElements = items.map(i => {
        const onClickHandler = () => onClick(i.id);
        return <li key={i.id} onClick={onClickHandler}>{i.title}</li>})

    return (
        <ul>{itemsElements}</ul>
    )
});
