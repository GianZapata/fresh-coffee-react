import { createContext } from 'react';
import { ICartProduct } from '../../interfaces';

interface ContextProps {
  /** Properties */
  cart: ICartProduct[];
  isLoaded: boolean;
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;

  /** Methods */
  addProductToCart: (cartProduct: ICartProduct) => void;
  removeProductInCart: (product: ICartProduct) => void;
  createOrder: () => Promise<{
    hasError: boolean;
    message: string;
  }>;
  completeOrder: (id: number) => void;
  setAvailableProduct: (id: number) => Promise<void>;
}

export const CartContext = createContext({} as ContextProps);
