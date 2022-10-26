import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Accordion, ItemsType} from './Accordion';
import {action, actions} from "@storybook/addon-actions";


export default {
  title: 'Example/Accordion',
  component: Accordion,
  // parameters: {
  //   actions: {
  //     handles: ['mouseover', 'click .li'],
  //   },
  // },
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
} as ComponentMeta<typeof Accordion>;


const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

const items: ItemsType[] = [{id: 1, title: "Kilka"}, {id: 2, title: "Cola"}, {id: 3, title: "Soda"}];


export const Collapsed = Template.bind({});
Collapsed.args = {
  title: 'Menu',
  collapsed: true,
  onClickCollapsed: () => {},
  items: items,
};

export const UnCollapsed = Template.bind({});
UnCollapsed.args = {
  title: 'Menu',
  collapsed: false,
  onClickCollapsed: () => {},
  items: items,
};
