import freshCoffeeApi from '../api/freshApi';
import { useQuery } from 'react-query';
import { IProduct } from '../interfaces';

const getProducts = async (): Promise<IProduct[]> => {
  const { data } = await freshCoffeeApi.get<{ data: IProduct[] }>(
    '/api/products',
  );
  return data.data;
};

export const useProducts = () => {
  const productsQuery = useQuery('products', getProducts);
  return productsQuery;
};
