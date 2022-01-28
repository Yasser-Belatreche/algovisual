import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Layout } from "./Layout";

export default {
  title: "Global/Layout",
  component: Layout,
  argTypes: {},
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args}>
    <div className="h-screen w-screen"> [content] </div>
  </Layout>
);

export const GlobalLayout = Template.bind({});
GlobalLayout.args = {};
