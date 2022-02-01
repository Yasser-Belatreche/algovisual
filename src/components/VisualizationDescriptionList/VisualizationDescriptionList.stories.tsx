import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { VisualizationDescriptionList } from "./VisualizationDescriptionList";
import { IMAGES } from "../../utils/constants/Images";

export default {
  title: "Global/VisualizationDescriptionList",
  component: VisualizationDescriptionList,
  argTypes: {},
} as ComponentMeta<typeof VisualizationDescriptionList>;

const Template: ComponentStory<typeof VisualizationDescriptionList> = (
  args
) => <VisualizationDescriptionList {...args} />;

const items = [
  {
    title: "Sorting Algorithms",
    description:
      "Explore how the most famous sorting algorithms works, we've included Bubble Sort, Merge Sort, Insertion Sort and more...",
    image: IMAGES.sorting,
    pageLink: "/visulizations/sorting",
  },
  {
    title: "Sorting Algorithms",
    description:
      "Explore how the most famous sorting algorithms works, we've included Bubble Sort, Merge Sort, Insertion Sort and more...",
    image: IMAGES.sorting,
    pageLink: "/visulizations/sorting",
  },
  {
    title: "Sorting Algorithms",
    description:
      "Explore how the most famous sorting algorithms works, we've included Bubble Sort, Merge Sort, Insertion Sort and more...",
    image: IMAGES.sorting,
    pageLink: "/visulizations/sorting",
  },
];

export const StartWithRightText = Template.bind({});
StartWithRightText.args = {
  listItems: items,
  firstItemTextPosition: "right",
};

export const StartWithLeftText = Template.bind({});
StartWithLeftText.args = {
  ...StartWithRightText.args,
  firstItemTextPosition: "left",
};
