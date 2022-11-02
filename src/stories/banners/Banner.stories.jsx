import React from 'react';

import { Banner } from './Banner';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Banner',
  component: Banner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Banner {...args} />;

// size: PropTypes.oneOf(['small', 'medium', 'large', 'x-large']),


export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  // primary: true,
  size: 'small',
  label: 'Banner',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Banner',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Banner',
};

export const Xlarge = Template.bind({});
Xlarge.args = {
  size: 'x-large',
  label: 'Banner',
};
