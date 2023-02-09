import { useContext, useEffect } from 'react';
import useSWR from 'swr';
import freshCoffeeApi from '../api/freshApi';
import { IProduct } from '../interfaces';
import { QuioscoContext } from '../context';

const getProducts = async (): Promise<IProduct[]> => {
  const { data } = await freshCoffeeApi.get<{ data: IProduct[] }>(
    '/api/products',
  );
  return data.data;
};

export const useProducts = () => {
  const { filteredProducts, setProducts, currentCategory } =
    useContext(QuioscoContext);

  const { data: products, isLoading } = useSWR('/api/products', getProducts);

  useEffect(() => {
    if (products && products.length > 0) {
      setProducts(products);
    }
  }, [products]);

  return {
    products: filteredProducts,
    isLoading: isLoading || !currentCategory,
    currentCategory,
  };
};
