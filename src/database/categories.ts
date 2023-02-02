import { ICategory } from './../interfaces';
import freshCoffeeApi from '../api/freshApi';

export const findAll = async (): Promise<ICategory[]> => {
  const { data } = await freshCoffeeApi.get<{ data: ICategory[] }>(
    '/api/categories',
  );
  return data.data;
};
