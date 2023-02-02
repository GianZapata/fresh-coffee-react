import { createContext } from 'react';
import { IProduct, ICategory } from '../../interfaces';

interface ContextProps {
  showModal: boolean;
  currentProduct: IProduct | null;
  currentCategory: ICategory | null;
  products: IProduct[];
  categories: ICategory[];

  onSetCurrentCategory: (category: ICategory) => void;
  onFilterProductsByCategory: (category: ICategory) => void;
  onShowProductModal: (id: number) => void;
  onHideProductModal: () => void;
}

export const QuioscoContext = createContext({} as ContextProps);
