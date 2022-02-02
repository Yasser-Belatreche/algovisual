import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BlueBackground } from "./BlueBackground";

export default {
  title: "Global/BlueBackground",
  component: BlueBackground,
  argTypes: {},
} as ComponentMeta<typeof BlueBackground>;

const Template: ComponentStory<typeof BlueBackground> = (args) => (
  <BlueBackground {...args}>
    <div
      style={{
        padding: "100px",
        color: "white",
        fontSize: 30,
        textAlign: "center",
      }}
    >
      Some content
    </div>
  </BlueBackground>
);

export const BlueBackgroundDefault = Template.bind({});
BlueBackgroundDefault.args = {};
