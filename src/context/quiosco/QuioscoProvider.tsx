import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { QuioscoContext, quioscoReducer } from './';
import { IProduct, ICategory } from '../../interfaces';
import { dbCategories } from '../../database';

export interface QuioscoState {
  categories: ICategory[];
  currentCategory: ICategory | null;
  currentProduct: IProduct | null;
  filteredProducts: IProduct[];
  products: IProduct[];
  showModal: boolean;
}

const QUIOSCO_INITIAL_STATE: QuioscoState = {
  categories: [],
  currentCategory: null,
  currentProduct: null,
  filteredProducts: [],
  products: [],
  showModal: false,
};

export const QuioscoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(quioscoReducer, QUIOSCO_INITIAL_STATE);

  const showProductModal = (id: number) => {
    if (!id) return;
    const product = state.filteredProducts.find((product) => product.id === id);
    if (!product) return;
    dispatch({
      type: '[Quiosco] - SetShowProductModal',
      payload: product,
    });
  };

  const hideProductModal = () => {
    dispatch({
      type: '[Quiosco] - SetHideProductModal',
    });
  };

  const getCategories = async (): Promise<void> => {
    try {
      const categories = await dbCategories.findAll();
      dispatch({
        type: '[Quiosco] - SetCategories',
        payload: categories,
      });
    } catch (error) {}
  };

  const setCurrentCategory = (category: ICategory) => {
    dispatch({
      type: '[Quiosco] - SetCurrentCategory',
      payload: category,
    });
  };

  const setProducts = (products: IProduct[]) => {
    dispatch({
      type: '[Quiosco] - SetProducts',
      payload: products,
    });
  };

  const filterProductsByCategory = (category: ICategory) => {
    const filteredProducts = state.products.filter(
      (product) => product.category_id === category.id,
    );
    dispatch({
      type: '[Quiosco] - SetFilteredProducts',
      payload: filteredProducts,
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (state.categories.length > 0) {
      setCurrentCategory(state.categories[0]);
    }
  }, [state.categories]);

  useEffect(() => {
    if (state.currentCategory) {
      filterProductsByCategory(state.currentCategory);
    }
  }, [state.currentCategory]);

  return (
    <QuioscoContext.Provider
      value={{
        /** State */
        ...state,

        /** Methods */
        setProducts,
        setCurrentCategory,
        showProductModal,
        hideProductModal,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};
