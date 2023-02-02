import { useContext, useEffect } from 'react';
import { CardProduct } from '../../components/pages/home/CardProduct';
import { QuioscoContext } from '../../context';
import { useProducts } from '../../hooks/useProducts';

export const HomePage = () => {
  const { filteredProducts, setProducts, currentCategory } =
    useContext(QuioscoContext);
  const productsQuery = useProducts();

  useEffect(() => {
    if (productsQuery && productsQuery.data) {
      setProducts(productsQuery.data);
    }
  }, [productsQuery.data]);

  if (productsQuery.isLoading || !currentCategory) return <p>Loading...</p>;

  return (
    <>
      <h1 className="text-4xl font-black">{currentCategory.name}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido a continuación
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};
