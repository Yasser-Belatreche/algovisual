import { render } from "@testing-library/react";
import { Layout } from "./Layout";

describe("Layout Component", () => {
  it("should render correctly", () => {
    const instance = render(<Layout />);
    expect(instance.container).toMatchSnapshot();
  });

  it("shoudl be able to reverse the navbar colors", () => {
    const instance = render(<Layout navbarReversed={true} />);
    expect(instance.container).toMatchSnapshot();
  });
});
