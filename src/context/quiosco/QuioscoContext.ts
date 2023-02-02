import { createContext } from 'react';
import { IProduct, ICategory } from '../../interfaces';

interface ContextProps {
  categories: ICategory[];
  currentCategory: ICategory | null;
  currentProduct: IProduct | null;
  products: IProduct[];
  filteredProducts: IProduct[];
  showModal: boolean;

  hideProductModal: () => void;
  setCurrentCategory: (category: ICategory) => void;
  showProductModal: (id: number) => void;
  setProducts: (products: IProduct[]) => void;
}

export const QuioscoContext = createContext({} as ContextProps);
