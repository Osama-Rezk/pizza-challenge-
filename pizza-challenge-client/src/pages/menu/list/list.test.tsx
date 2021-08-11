import { render, screen } from "@testing-library/react";
import { List } from "./";
import { MemoryRouter } from "react-router-dom";

let pizzas = [
  {
    id: "pizza",
    name: "Pizza",
    price: 15,
    description: "A classic pizza with our special sauce.",
    images: [],
    addons: [],
    sizes: [],
  },
];

describe("testing Menu List  Component", () => {
  it("Should Render 1  Item in the List", () => {
    const mockOnClick = jest.fn();

    render(<List items={pizzas} onItemClick={mockOnClick} />);

    const startsWrapperChildrenCount =
      screen.getByTestId("pizza-list").children.length;
    expect(startsWrapperChildrenCount).toBe(1);
  });
});
