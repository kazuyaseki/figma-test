import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    icon front: {
      options: ["true","false"],
      control: { type: 'radio' },
    }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
