import { rest } from "msw";
import { Pizzas } from "../data";

const handlers = [
  rest.get("http://localhost:5000/pizzas", async (req, res, ctx) => {
    return res(ctx.json(Pizzas));
  }),
];

export { handlers };
