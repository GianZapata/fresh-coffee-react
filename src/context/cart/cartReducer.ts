import { ICartProduct } from '../../interfaces';
import { CartState } from './';

export interface IOrderSummary {
  numberOfItems: number;
  subTotal: number;
  total: number;
  tax: number;
}

type CartActionType =
  | { type: '[Cart] - Change Product Quantity'; payload: ICartProduct }
  | { type: '[Cart] - Order Complete' }
  | { type: '[Cart] - Remove Product In Cart'; payload: ICartProduct }
  | { type: '[Cart] - Update Order Summary'; payload: IOrderSummary }
  | { type: '[Cart] - Update Products In Cart'; payload: ICartProduct[] };

export const cartReducer = (
  state: CartState,
  action: CartActionType,
): CartState => {
  switch (action.type) {
    case '[Cart] - Update Products In Cart':
      return {
        ...state,
        cart: [...action.payload],
      };
    case '[Cart] - Remove Product In Cart':
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    case '[Cart] - Update Order Summary':
      return {
        ...state,
        ...action.payload,
      };

    case '[Cart] - Order Complete':
      return {
        ...state,
        cart: [],
        numberOfItems: 0,
        subTotal: 0,
        total: 0,
        tax: 0,
      };
    default:
      return state;
  }
};
