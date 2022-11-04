import React from 'react';

import { Separator } from './Separator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Separator',
  component: Separator,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Separator {...args} />;

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  // primary: true,
  size: 'small',
  label: 'Separator',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Separator',
};

export const Huge = Template.bind({});
Huge.args = {
  size: 'huge',
  label: 'Separator',
};
