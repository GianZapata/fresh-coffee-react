import {
  FC,
  PropsWithChildren,
  useReducer,
  useEffect,
  useContext,
} from 'react';
import { toast } from 'react-toastify';
import axios, { type AxiosError } from 'axios';
import { CartContext, cartReducer } from './';
import freshCoffeeApi from '../../api/freshApi';
import { ICartProduct, IOrder } from '../../interfaces';
import { AuthContext } from '../auth/AuthContext';

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

const TAX_RATE = import.meta.env.VITE_TAX_RATE;

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const accessToken = localStorage.getItem('accessToken');
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  const { logoutUser } = useContext(AuthContext);

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

    const taxRate = Number(TAX_RATE || 0);

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

  const createOrder = async (): Promise<{
    hasError: boolean;
    message: string;
  }> => {
    const bodyOrder = {
      //   paymentResult: '',
      //   shippingAddress: state.shippingAddress,
      numberOfItems: state.numberOfItems,
      subTotal: state.subTotal,
      tax: state.tax,
      total: state.total,
      isPaid: false,
      orderItems: state.cart.map((product) => ({
        productId: product.id,
        quantity: product.quantity,
        price: product.price,
      })),
    };

    try {
      const { data } = await freshCoffeeApi.post<IOrder>(
        '/api/orders',
        bodyOrder,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      toast.success('Orden creada con éxito, en breve será procesada');

      dispatch({ type: '[Cart] - Order Complete' });

      setTimeout(() => {
        logoutUser();
      }, 3000);

      return {
        hasError: false,
        message: data.id.toString(),
      };
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err as AxiosError<{ message: string }>;
        return {
          hasError: true,
          message:
            error.response?.data.message ||
            'Hubo un error al crear la orden, intente nuevamente',
        };
      }
      return {
        hasError: true,
        message: 'Error no controlado, hable con el administrador',
      };
    }
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        /** Methods */
        addProductToCart,
        removeProductInCart,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
