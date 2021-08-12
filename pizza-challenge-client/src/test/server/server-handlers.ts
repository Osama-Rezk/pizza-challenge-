import { rest } from "msw";
import { Pizzas, order } from "../data";

const handlers = [
  rest.get("http://localhost:5000/pizzas", async (req, res, ctx) => {
    return res(ctx.json(Pizzas));
  }),

  rest.post("http://localhost:5000/orders", async (req, res, ctx) => {
    return res(ctx.json(order));
  }),
];

export { handlers };
