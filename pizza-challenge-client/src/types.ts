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

export interface Address {
  street: string;
  houseNo: string;
  city: string;
  postalCode: string;
}
export interface User {
  email: string;
  name: string;
  password?: string;
  phoneNumber: string;
  address?: Address;
  token?: string;
  id: string;
}
export interface Authentication {
  user: User;
  login: (email: string, password: string) => Promise<any>;
  signup: (user: User) => Promise<User>;
  register: () => Promise<any>;
  isLoggedIn: boolean;
}
