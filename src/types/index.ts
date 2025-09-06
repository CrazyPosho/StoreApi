export interface Product {
  id: number | string;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export const VALID_CATEGORIES = [
  "jewelery",
  "men's clothing",
  "electronics",
  "women's clothing",
];
