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
  },
];

describe("testing Menu List  Component ", () => {
  it("It should Render 1  Item in the  List", () => {
    render(<List items={pizzas} />);

    const startsWrapperChildrenCount =
      screen.getByTestId("pizza-list").children.length;
    expect(startsWrapperChildrenCount).toBe(1);
  });
});
