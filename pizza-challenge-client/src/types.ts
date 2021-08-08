export interface Size {
  price: number;
  name: string;
}

export interface Addon {
  price: number;
  name: string;
}
export interface PizzaItem {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  sizes: Size[];
  addons: Addon[];
}
