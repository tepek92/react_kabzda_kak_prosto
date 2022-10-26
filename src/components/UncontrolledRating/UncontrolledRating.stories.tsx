import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncontrolledRating} from './UncontrolledRating';


export default {
  title: 'Example/UncontrolledRating',
  component: UncontrolledRating,
} as ComponentMeta<typeof UncontrolledRating>;


const Template: ComponentStory<typeof UncontrolledRating> = (args) => <UncontrolledRating />;

export const Rating = Template.bind({});
Rating.args = {};


