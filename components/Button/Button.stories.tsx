import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    Small screen: {
      options: ["false","true"],
      control: { type: 'radio' },
    },
    Icon: {
      options: ["false","true"],
      control: { type: 'radio' },
    },
    Type: {
      options: ["Basic","Primary","Destructive","Outline","Outline monochrome","Plain","Plain destructive","Plain monochrome","Loading"],
      control: { type: 'radio' },
    },
    Disclosure: {
      options: ["false","true"],
      control: { type: 'radio' },
    },
    Size: {
      options: ["Medium","Slim","Large"],
      control: { type: 'radio' },
    },
    State: {
      options: ["Default","Hover","Focus","Pressed","Disabled","Depressed"],
      control: { type: 'radio' },
    }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
