import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tab } from '.';

export default {
  title: 'Tab',
  component: Tab,
  argTypes: {
    state: {
      options: ["default","selected"],
      control: { type: 'radio' },
    },
    badge: {
      options: ["on","off"],
      control: { type: 'radio' },
    }
  },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;
