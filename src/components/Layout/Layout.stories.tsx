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
    <div style={{ padding: "100px", textAlign: "center" }}>some content</div>
  </Layout>
);

export const GlobalLayout = Template.bind({});
GlobalLayout.args = {};
