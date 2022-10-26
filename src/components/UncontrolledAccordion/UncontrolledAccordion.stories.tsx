import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncontrolledAccordion} from './UncontrolledAccordion';


export default {
  title: 'Example/UncontrolledAccordion',
  component: UncontrolledAccordion,
  argTypes: {
    title: {
      description: 'Текст заголовка',
    },
  }
} as ComponentMeta<typeof UncontrolledAccordion>;


const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion {...args} />;

export const Accordion = Template.bind({});
Accordion.args = {title: 'Menu'};


