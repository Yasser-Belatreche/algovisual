import { render } from "@testing-library/react";

import { HeroTitle } from "./HeroTitle";

describe("Button compoenent", () => {
  it("should have the black shade color by default", () => {
    const { container } = render(<HeroTitle>My title</HeroTitle>);

    expect(container).toMatchSnapshot();
  });

  it("should have the white color when changing the color prop to white", () => {
    const { container } = render(<HeroTitle color="white">My title</HeroTitle>);

    expect(container).toMatchSnapshot();
  });
});
