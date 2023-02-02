import { categories } from './categories';
import { products } from './products';

export interface SeedCategory {
  iconName: string;
  id: number;
  name: string;
}

export interface SeedProduct {
  categoryId: number;
  id: number;
  image: string;
  name: string;
  price: number;
}

interface SeedData {
  categories: SeedCategory[];
  products: SeedProduct[];
}

export const initialData: SeedData = {
  categories,
  products,
};
