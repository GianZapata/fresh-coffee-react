import { QuioscoState } from './';
import { ICategory } from '../../interfaces/category.interface';
import { IProduct } from '../../interfaces/product.interface';

type QuioscoActionType =
  | { type: '[Quiosco] - GetProducts' }
  | { type: '[Quiosco] - SetCategories'; payload: ICategory[] }
  | { type: '[Quiosco] - SetCurrentCategory'; payload: ICategory }
  | { type: '[Quiosco] - SetCurrentProduct'; payload: IProduct }
  | { type: '[Quiosco] - SetFilteredProducts'; payload: IProduct[] }
  | { type: '[Quiosco] - SetHideProductModal' }
  | { type: '[Quiosco] - SetProducts'; payload: IProduct[] }
  | { type: '[Quiosco] - SetShowProductModal'; payload: IProduct };

export const quioscoReducer = (
  state: QuioscoState,
  action: QuioscoActionType,
): QuioscoState => {
  switch (action.type) {
    case '[Quiosco] - SetProducts':
      return {
        ...state,
        products: action.payload,
      };
    case '[Quiosco] - SetFilteredProducts':
      return {
        ...state,
        filteredProducts: action.payload,
      };
    case '[Quiosco] - SetCurrentProduct':
      return {
        ...state,
        currentProduct: action.payload,
      };
    case '[Quiosco] - SetCategories':
      return {
        ...state,
        categories: action.payload,
      };
    case '[Quiosco] - SetCurrentCategory':
      return {
        ...state,
        currentCategory: action.payload,
      };
    case '[Quiosco] - SetShowProductModal':
      return {
        ...state,
        showModal: true,
        currentProduct: action.payload,
      };
    case '[Quiosco] - SetHideProductModal':
      return {
        ...state,
        showModal: false,
        currentProduct: null,
      };
    default:
      return state;
  }
};
