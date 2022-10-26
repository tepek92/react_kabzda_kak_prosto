import React, {useState, KeyboardEvent, useEffect, memo} from "react";
import {SelectTitle} from "./SelectTitle/SelectTitle";
import {SelectBody} from "./SelectBody/SelectBody";

export type ItemsType = {
    value: number
    title: string
}
type SelectPropsType = {
    value: number
    items: Array<ItemsType>
    onClick: (id: number) => void
};

export const Select: React.FC<SelectPropsType> = memo((props) => {
    const {value, items, onClick} = props;

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [valueHover, setValueHover] = useState<number>(value);

    useEffect(() => setValueHover(value), [value, collapsed]);

    const onClickCollapsed = () => setCollapsed(!collapsed);
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.code === 'Escape' || e.code === 'Enter') {
            setCollapsed(false);
            e.code === 'Enter' && onClick(valueHover);
        } else if (e.code === 'ArrowDown' || e.code === 'ArrowUp') {
            setCollapsed(true);
            if (collapsed) {
                for (let i = 0; i < items.length; i++) {
                    if (items[i].value === valueHover) {
                        const step = e.code === 'ArrowDown' ? 1 : -1;
                        setValueHover(items[i + step] ? items[i + step].value : items[i].value);
                    }
                }
            }
        }
    }

    const title = items.find(i => i.value === value)?.title;
    return (
        <div>
            <SelectTitle
                title={title || 'none'}
                collapsed={collapsed}
                onClickCollapsed={onClickCollapsed}
                onKeyUp={onKeyUp}
            />
            {collapsed &&
                <SelectBody
                    value={value}
                    valueHover={valueHover}
                    items={items}
                    onClick={onClick}
                    onClickCollapsed={onClickCollapsed}
                    onMouseHover={setValueHover}
                />
            }
        </div>
    )
});


