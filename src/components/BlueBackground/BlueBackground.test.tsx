import { render } from "@testing-library/react";
import { BlueBackground } from "./BlueBackground";

describe("BlueBackground component", () => {
  it("should render a blue background that take the full screen with around his children", () => {
    const { container } = render(
      <BlueBackground>Some children</BlueBackground>
    );
    expect(container).toMatchSnapshot();
  });

  it("the container div should have the props passed to the component", () => {
    const props = {
      className: "someClass",
      onClick: () => {},
    };
    const instance = render(<BlueBackground {...props}></BlueBackground>);

    const container = instance.getByRole("container");

    expect(container.classList.length).toEqual(2);
    expect(container.classList).toContain(props.className);
    expect(container.onclick).toBeDefined();

    expect(instance.container).toMatchSnapshot();
  });
});
