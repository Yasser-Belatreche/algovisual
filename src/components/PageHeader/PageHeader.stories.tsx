import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageHeader } from "./PageHeader";
import { IMAGES } from "../../utils/constants/Images";

export default {
  title: "Global/PageHeader",
  component: PageHeader,
  argTypes: {},
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => (
  <PageHeader {...args} />
);

export const PageHeaderDefault = Template.bind({});
PageHeaderDefault.args = {
  backgroundImage: IMAGES.algorithmsHeaderBg,
  title: "Algorithms",
};
