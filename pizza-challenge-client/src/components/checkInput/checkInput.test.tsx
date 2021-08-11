import { CheckInput } from "./";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";

describe("CheckInput", () => {
  it("Radio render and behave correctly", () => {
    const { getByRole, getByText } = render(<CheckInput label="choose me" />);

    expect(getByText("choose me")).toBeInTheDocument();

    const radioButton = getByRole("radio");

    userEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  });

  it("Checkbox render and behave correctly", () => {
    const { getByRole, getByText } = render(
      <CheckInput label="choose me" type="checkbox" />
    );

    expect(getByText("choose me")).toBeInTheDocument();

    const checkBox = getByRole("checkbox");

    userEvent.click(checkBox);
    expect(checkBox).toBeChecked();
  });

  it("disables the input if passing disabled prop", () => {
    const { getByRole } = render(
      <CheckInput label="choose me" disabled={true} />
    );
    const radioButton = getByRole("radio");
    expect(radioButton).toBeDisabled();

    userEvent.click(radioButton);
    expect(radioButton).not.toBeChecked();
  });
});
