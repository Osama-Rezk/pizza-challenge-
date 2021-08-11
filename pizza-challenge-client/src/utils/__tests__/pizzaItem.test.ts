import { calculatePizzaPrice } from "../pizzaItem";

describe("pizzaItem Utils", () => {
  it("calculate the correct price", () => {
    expect(
      calculatePizzaPrice({ name: "c", price: 10 }, [{ name: "c", price: 10 }])
    ).toBe(20);
  });
});
