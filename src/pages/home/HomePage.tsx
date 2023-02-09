import { CardProduct } from '../../components/pages/home/CardProduct';
import { useProducts } from '../../hooks/useProducts';

export const HomePage = () => {
  const { isLoading, products, currentCategory } = useProducts();

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h1 className="text-4xl font-black">{currentCategory?.name}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido a continuación
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};
