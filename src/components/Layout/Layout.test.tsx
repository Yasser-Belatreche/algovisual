import { render } from "@testing-library/react";
import { Layout } from "./Layout";

describe("Layout Component", () => {
  it("should render correctly", () => {
    const instance = render(<Layout />);

    expect(instance.container).toMatchSnapshot();
  });
});
