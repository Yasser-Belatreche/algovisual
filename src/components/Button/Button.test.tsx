import { fireEvent, render } from "@testing-library/react";

import { Button } from "./Button";

describe("Button compoenent", () => {
  it("should have the primary color by default", () => {
    const { container } = render(<Button label="button" />);

    expect(container).toMatchSnapshot();
  });

  it("should have the secondary color when passing the secondary prop", () => {
    const { container } = render(<Button label="button" secondary />);

    expect(container).toMatchSnapshot();
  });

  it("should have the full width when passing the full prop", () => {
    const { container } = render(<Button label="button" full />);

    expect(container).toMatchSnapshot();
  });

  it("should call the onClick handler when passed", () => {
    const mockFn = jest.fn();

    const instance = render(<Button label="button" onClick={mockFn} />);

    const button = instance.getByRole("button");
    fireEvent["click"](button);

    expect(mockFn).toBeCalledTimes(1);
    expect(instance.container).toMatchSnapshot();
  });
});
