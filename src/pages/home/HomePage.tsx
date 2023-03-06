import { CardProduct, LoadingCardProduct } from '../../components/pages/home';
import { useProducts } from '../../hooks/useProducts';

export const HomePage = () => {
  const { products, currentCategory, isLoading } = useProducts();

  // If there is no category selected, show the loading skeleton
  if (!currentCategory || (!isLoading && products.length === 0)) {
    return (
      <div className="py-5">
        <div className="h-8 bg-gray-300 rounded w-1/2 animate-pulse m-auto"></div>
        <div className="h-5 bg-gray-300 rounded w-1/2 animate-pulse m-auto my-10"></div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
          <LoadingCardProduct />
          <LoadingCardProduct />
          <LoadingCardProduct />
          <LoadingCardProduct />
          <LoadingCardProduct />
          <LoadingCardProduct />
        </div>
      </div>
    );
  }

  return (
    <div className="py-5">
      <h1 className="text-4xl font-black text-center">
        {currentCategory.name}
      </h1>
      <p className="text-2xl my-10 text-center">
        Elige y personaliza tu pedido a continuación
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
        {products.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
