import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff} from './OnOff';


export default {
  title: 'Example/OnOff',
  component: OnOff,
  argTypes: {
    on: {
      description: 'Состояние',
    },
    onChangeOnOf: {
      description: 'Функция изменения состояния'
    }
  }
} as ComponentMeta<typeof OnOff>;


// const Template: ComponentStory<typeof OnOff> = (args) => {
//   const [on, setOn] = useState<boolean> (false);
//   return <OnOff {...args} on={on} onChangeOnOf={setOn}/>;
// }

const Template: ComponentStory<typeof OnOff> = (args) =>  <OnOff {...args}/>;

export const OnMode = Template.bind({});

OnMode.args = {on: true, onChangeOnOf: x=>x};

export const OffMode = Template.bind({});
OffMode.args = {on: false, onChangeOnOf: x=>x};

