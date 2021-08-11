import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("testing Button  Component", () => {
  it("Button should Be Disabled", () => {
    render(<Button label="label" disabled={true} />);

    expect(screen.getByTestId("button")).toHaveAttribute("disabled");
  });

  it("Button should Have A Label", () => {
    render(<Button label="label" />);

    expect(screen.getByTestId("button")).toHaveTextContent("label");
  });

  it("Button should Have Clicked", () => {
    const mockOnClick = jest.fn();

    render(<Button label="label" onClickHandler={mockOnClick} />);

    fireEvent.click(screen.getByTestId("button"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
