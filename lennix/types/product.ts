export type ProductCategory =
  | "women"
  | "men"
  | "unisex"
  | "gift-set";

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  featured?: boolean;
  bestseller?: boolean;
  newArrival?: boolean;
  colors?: string[];
};