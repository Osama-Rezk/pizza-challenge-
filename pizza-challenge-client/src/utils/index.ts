import { Size, Addon } from "../types";

export const calculatePizzaPrice = (size: Size, addons: Addon[]): number => {
  if (!size.price && !addons) return 0;

  return size.price + addons.reduce((acc, addon) => acc + addon.price, 0);
};
