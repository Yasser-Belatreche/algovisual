import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home Page", () => {
  it("should render correctely", () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
