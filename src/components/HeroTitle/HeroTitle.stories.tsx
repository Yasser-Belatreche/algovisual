import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HeroTitle } from "./HeroTitle";

export default {
  title: "Global/HeroTitle",
  component: HeroTitle,
  argTypes: {},
} as ComponentMeta<typeof HeroTitle>;

const Template: ComponentStory<typeof HeroTitle> = (args) => (
  <HeroTitle {...args}>Algorithms</HeroTitle>
);

export const Black = Template.bind({});
Black.args = {};

export const White = Template.bind({});
White.args = {
  color: "white",
};
