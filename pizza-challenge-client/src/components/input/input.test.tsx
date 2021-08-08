import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./";

describe("testing Input  Component ", () => {
  it("Input should Be Disabled ", () => {
    render(<Input />);

    const inputEl = screen.getByTestId("base-input");
    expect(inputEl).toBeInTheDocument();
  });
});
