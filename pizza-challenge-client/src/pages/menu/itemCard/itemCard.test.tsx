import { render, screen } from "@testing-library/react";
import { ItemCard } from "./";

let item = {
  id: "pizza",
  name: "Pizza",
  price: 15,
  description: "A classic pizza with our special sauce.",
  images: [],
};

describe("testing Pizza Card  Component ", () => {
  it("The Pizza Card Should Render As Expected  ", () => {
    render(<ItemCard item={item} />);

    expect(screen.getByTestId("name")).toHaveTextContent(item.name);

    expect(screen.getByTestId("description")).toHaveTextContent(
      item.description
    );
  });
});
