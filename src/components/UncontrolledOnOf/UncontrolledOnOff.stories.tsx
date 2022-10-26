import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncontrolledOnOff} from './UncontrolledOnOff';


export default {
  title: 'Example/UncontrolledOnOff',
  component: UncontrolledOnOff,
  argTypes: {
    onChangeOnOf: {
      description: 'Функция оповещения об изменения состояния',
    },
  }
} as ComponentMeta<typeof UncontrolledOnOff>;


const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff {...args} />;

export const ModeOnOff = Template.bind({});
ModeOnOff.args = {onChangeOnOf: (on)=>{}};


