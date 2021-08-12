import {
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
} from "@testing-library/react";
import { AppProviders } from "../../context";
import { Pizzas } from "../../test/data";
import App from "../../App";

const renderCheckout = () => {
  window.history.pushState({}, "Test page", "/checkout");

  window.localStorage.setItem(
    "pizza",
    JSON.stringify({
      ...Pizzas[0],
      size: { price: 20, name: "Small" },
      selectedAddons: [{ price: 2, name: "Pepper" }],
    })
  );

  render(<App />, { wrapper: AppProviders });
};

describe("Checkout", () => {
  test("Render All Checkout", async () => {
    renderCheckout();

    expect(screen.getByText(Pizzas[0].name)).toBeInTheDocument();
    expect(screen.getByText(Pizzas[0].description)).toBeInTheDocument();
    expect(screen.getByText("22 $")).toBeInTheDocument();
    expect(screen.getByText("Pepper")).toBeInTheDocument();
    expect(screen.getByText("Small")).toBeInTheDocument();
  });
});
