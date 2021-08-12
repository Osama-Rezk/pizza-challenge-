import {
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
  cleanup,
} from "@testing-library/react";
import { Menu } from "../menu";
import { AppProviders } from "../../context";
import { Pizzas } from "../../test/data";
import App from "../../App";

afterEach(cleanup);

const renderMenu = () => render(<App />, { wrapper: AppProviders });

describe("Menu", () => {
  test("Render All Menu", async () => {
    renderMenu();

    expect(screen.queryByText("Loading...")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));

    expect(screen.getByText(Pizzas[0].name)).toBeInTheDocument();
    expect(screen.getByText(Pizzas[0].description)).toBeInTheDocument();
  });

  test("Open Options Modal ,select options And Go to checkout", async () => {
    renderMenu();
    let itemContainer = screen.getByTestId("item-container");

    fireEvent.click(itemContainer);

    expect(screen.getByText("Add Item Choices")).toBeInTheDocument();

    fireEvent.click(screen.getByText("medium (40)"));

    fireEvent.click(screen.getByText("Pepper (2)"));

    fireEvent.click(screen.getByRole("button", { name: /CHECKOUT/i }));

    expect(screen.getByTestId("checkout-page")).toBeInTheDocument();
  });
});
