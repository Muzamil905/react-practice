export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Macbook Pro",
    price: 1000,
    description: "A very Powerful Laptop"
  },
  {
    id: 2,
    name: "Macbook Pro Max",
    price: 1500,
    description: "A Best Powerful Laptop"
  },
  {
    id: 3,
    name: "iPhone 18 Pro Max",
    price: 1100,
    description: "Latest iPhone"
  },
  {
    id: 4,
    name: "AirPod Max",
    price: 250,
    description: "Listening Device"
  }
];