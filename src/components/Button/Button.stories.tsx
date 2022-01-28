import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { ICONS } from "../../utils/constants/Icons";

export default {
  title: "Global/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: "start learning" };

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  secondary: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Primary.args,
  full: true,
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  label: "contribute",
  icon: ICONS.github,
};
