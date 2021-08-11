import { render, screen, fireEvent } from "@testing-library/react";
import { ItemCard } from "./";

let item = {
  id: "pizza",
  name: "Pizza",
  price: 15,
  description: "A classic pizza with our special sauce.",
  images: [],
  sizes: [],
  addons: [],
};

describe("testing Pizza Card  Component", () => {
  it("The Pizza Card Should Render As Expected", () => {
    const mockOnClick = jest.fn();

    render(<ItemCard item={item} onClick={mockOnClick} />);

    expect(screen.getByTestId("name")).toHaveTextContent(item.name);

    expect(screen.getByTestId("description")).toHaveTextContent(
      item.description
    );

    fireEvent.click(screen.getByTestId("item-container"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
