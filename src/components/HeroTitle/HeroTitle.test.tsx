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

  it("should add the class passed to props to the class list", () => {
    const instance = render(
      <HeroTitle className="myCustomClass">My title</HeroTitle>
    );

    const header = instance.getByRole("heading");

    expect(header.classList.length).not.toEqual(1);
    expect(header.classList).toContain("myCustomClass");
    expect(instance.container).toMatchSnapshot();
  });
});
