import { FC, PropsWithChildren, useReducer, useEffect } from 'react';
import { CartContext, cartReducer } from './';
import { ICartProduct } from '../../interfaces';
import { toast } from 'react-toastify';

export interface CartState {
  cart: ICartProduct[];

  isLoaded: boolean;
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
  isLoaded: false,
  numberOfItems: 0,
  subTotal: 0,
  tax: 0,
  total: 0,
};
const TAX = 0.15;

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  /** Actualizar el resumen del pedido */
  useEffect(() => {
    const numberOfItems = state.cart.reduce(
      (prevPrice, currentProduct) => currentProduct.quantity + prevPrice,
      0,
    );
    const subTotal = state.cart.reduce(
      (prevPrice, currentProduct) =>
        currentProduct.quantity * currentProduct.price + prevPrice,
      0,
    );

    const taxRate = Number(TAX);

    const tax = subTotal * taxRate;
    const total = tax + subTotal;

    const orderSummary = {
      numberOfItems,
      subTotal,
      total,
      tax,
    };

    dispatch({ type: '[Cart] - Update Order Summary', payload: orderSummary });
  }, [state.cart]);

  const addProductToCart = (product: ICartProduct): void => {
    const isProductInCart = state.cart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      toast.success('Producto agregado al carrito');
      return dispatch({
        type: '[Cart] - Update Products In Cart',
        payload: [...state.cart, product],
      });
    }

    // Acumular la cantidad de productos
    const updatedProducts = state.cart.map((item) => {
      if (item.id !== product.id) return item;
      item.quantity = product.quantity;
      return item;
    });

    toast.success('Producto actualizado en el carrito');
    return dispatch({
      type: '[Cart] - Update Products In Cart',
      payload: updatedProducts,
    });
  };

  const removeProductInCart = (product: ICartProduct) => {
    dispatch({ type: '[Cart] - Remove Product In Cart', payload: product });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        /** Methods */
        addProductToCart,
        removeProductInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
