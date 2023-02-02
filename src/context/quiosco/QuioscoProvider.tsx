import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { QuioscoContext, quioscoReducer } from './';
import { IProduct, ICategory } from '../../interfaces';
import { initialData } from '../../data/seed-data';

export interface QuioscoState {
  categories: ICategory[];
  currentCategory: ICategory | null;
  currentProduct: IProduct | null;
  products: IProduct[];
  showModal: boolean;
}

const QUIOSCO_INITIAL_STATE: QuioscoState = {
  categories: initialData.categories,
  currentCategory: null,
  currentProduct: null,
  products: initialData.products,
  showModal: false,
};

export const QuioscoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(quioscoReducer, QUIOSCO_INITIAL_STATE);

  const onShowProductModal = (id: number) => {
    if (!id) return;
    const product = initialData.products.find((product) => product.id === id);
    if (!product) return;
    dispatch({
      type: '[Quiosco] - SetShowProductModal',
      payload: product,
    });
  };

  const onHideProductModal = () => {
    dispatch({
      type: '[Quiosco] - SetHideProductModal',
    });
  };

  const onSetCurrentCategory = (category: ICategory) => {
    dispatch({
      type: '[Quiosco] - SetCurrentCategory',
      payload: category,
    });
  };

  const onFilterProductsByCategory = (category: ICategory) => {
    const initialProducts = initialData.products;

    const products = initialProducts.filter(
      (product) => product.categoryId === category.id,
    );

    dispatch({
      type: '[Quiosco] - SetProducts',
      payload: products,
    });
  };

  useEffect(() => {
    onSetCurrentCategory(state.categories[0]);
  }, []);

  useEffect(() => {
    if (state.currentCategory) {
      onFilterProductsByCategory(state.currentCategory);
    }
  }, [state.currentCategory]);

  return (
    <QuioscoContext.Provider
      value={{
        ...state,
        /** Methods */
        onSetCurrentCategory,
        onFilterProductsByCategory,
        onShowProductModal,
        onHideProductModal,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};
