import {
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppProviders } from "../../context";
import { Pizzas } from "../../test/data";
import App from "../../App";
import { CheckoutForm } from "../checkout";

let formData: CheckoutForm = {
  name: "User Name",
  cardNumber: "User card Name",
  expirationDate: "05/24",
  cvv: "123",
  creditCardName: "378282246310005",
  street: "street name",
  city: "city name",
  phoneNumber: "030123456789",
  houseNumber: "50",
  postalCode: "1111111",
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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

  test("Should Validate the form", async () => {
    renderCheckout();

    fireEvent.click(screen.getByRole("button", { name: /Order Now/i }));

    await waitFor(() => {
      expect(screen.getByText("Please Enter Your Name")).toBeInTheDocument();
      expect(
        screen.getByText(/Please Enter Your street Name/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText("Please Enter Your City Name")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Please Enter Your House Number")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Please Enter Your Postal Code")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Please Enter Your Phone Number")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Please Enter Credit Card Name")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Credit Card number is invalid")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Expiration Date is invalid")
      ).toBeInTheDocument();
      expect(screen.getByText("cvv number is invalid")).toBeInTheDocument();
    });
  });
});
