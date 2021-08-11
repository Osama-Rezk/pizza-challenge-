import { render, screen } from "@testing-library/react";
import { Input } from "./";

describe("testing Input  Component", () => {
  it("should render Input correctly", () => {
    render(<Input label={"label"} />);

    expect(screen.getByTestId("base-input")).toBeInTheDocument();
    expect(screen.getByText("label")).toBeInTheDocument();
  });

  it("Should show error message", () => {
    render(<Input error="this field is required" />);

    screen.getByText("this field is required");

    expect(screen.getByText("this field is required")).toBeInTheDocument();
  });
});
