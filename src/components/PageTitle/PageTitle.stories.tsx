import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {PageTitle} from './PageTitle';


export default {
  title: 'Example/PageTitle',
  component: PageTitle,
  argTypes: {
    title: {
      description: 'Текст заголовка',
    },
  }
} as ComponentMeta<typeof PageTitle>;


const Template: ComponentStory<typeof PageTitle> = (args) => <PageTitle {...args} />;

export const TextTitlePage = Template.bind({});
TextTitlePage.args = {title: 'Go to React!'};

