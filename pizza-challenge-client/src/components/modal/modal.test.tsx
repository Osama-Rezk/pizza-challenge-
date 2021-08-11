import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "./";

describe("testing Modal  Component", () => {
  it("Should Function when is it Visible", () => {
    const mockOnClick = jest.fn();

    render(
      <Modal title="Modal Title " open={true} onClose={mockOnClick}>
        Modal Content
      </Modal>
    );

    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
