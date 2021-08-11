import { Size, Addon } from "../types";

export const calculatePizzaPrice = (size: Size, addons: Addon[]): number => {
  let price = 0;

  if (!size.price && !addons) return 0;

  if (size.price) price += size.price;

  if (addons.length)
    price += addons.reduce((acc, addon) => acc + addon.price, 0);

  return price;
};
