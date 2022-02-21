import { render } from "@testing-library/react";
import { IMAGES } from "../../utils/constants/Images";
import { PageHeader } from "./PageHeader";

describe("PageHeader Component", () => {
  it("should render correctly", () => {
    const instance = render(
      <PageHeader
        title="Algorithms"
        backgroundImage={IMAGES.algorithmsHeaderBg}
      />
    );
    expect(instance.container).toMatchSnapshot();
  });
});
