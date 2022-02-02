import { render } from "@testing-library/react";
import { IMAGES } from "../../utils/constants/Images";

import { VisualizationDescriptionList } from "./VisualizationDescriptionList";

describe("VisulizationDescriptionList compoenent", () => {
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

  it("should render a list of VisulizatoinDescriptions, by default the text in the first element is on the right side", () => {
    const { container } = render(
      <VisualizationDescriptionList
        listItems={items}
        firstItemTextPosition="right"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("The text in the first element should be on the left side, when passing 'left' as value of the prop firstItemTextPosition", () => {
    const { container } = render(
      <VisualizationDescriptionList
        listItems={items}
        firstItemTextPosition="left"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("the container should have the class 'containerClass' from the props", () => {
    const instance = render(
      <VisualizationDescriptionList
        listItems={items}
        firstItemTextPosition="left"
        containerClass="someClass"
      />
    );

    const container = instance.getByRole("listContainer");

    expect(container.classList.length).toEqual(2);
    expect(container.classList).toContain("someClass");

    expect(instance.container).toMatchSnapshot();
  });
});
