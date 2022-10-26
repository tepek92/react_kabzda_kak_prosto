import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ItemsType, Select} from "./Select";

export default {
    title: 'Example/Select',
    component: Select,

    argTypes: {
        title: {
            description: 'Текст заголовка',
        },
        collapsed: {
            description: 'Состояние'
        },
        onClickCollapsed: {
            description: 'Функция изменения рейтинга'
        },
        items: {
            description: 'Элементы списка'
        },
        onClick: {
            description: 'Оповещает о нажатии на элемент списка',
            action: 'clicked on item',
        },
    }
} as ComponentMeta<typeof Select>;


const Template: ComponentStory<typeof Select> = (args) => {
    const [value, seValue] = useState(1);
    const onClick = (newValue: number) => {
        seValue(newValue);
    }
    return <Select {...args} onClick={onClick} value={value}/>;
}

const items: ItemsType[] = [
    {value: 1, title: "Kilka"},
    {value: 4, title: "Cola"},
    {value: 8, title: "Soda"},
    {value: 19, title: "Mango"},
    {value: 25, title: "Coffe"},
];



export const Collapsed = Template.bind({});
Collapsed.args = {
    items: items,
};

export const UnCollapsed = Template.bind({});
UnCollapsed.args = {
    items: items,
};
