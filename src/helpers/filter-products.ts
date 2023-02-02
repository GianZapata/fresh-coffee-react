import { IProduct, ICategory } from './../interfaces';

export const filterProductsByCategory = (
  products: IProduct[],
  category: ICategory,
): IProduct[] => {
  return products.filter((product) => product.category_id === category.id);
};
