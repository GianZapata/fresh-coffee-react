import { CardProduct } from '../../components/pages/home/CardProduct';
import { useProducts } from '../../hooks/useProducts';
import { MainLayout } from '../../layouts/MainLayout';

export const HomePage = () => {
  const { isLoading, products, currentCategory } = useProducts();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <MainLayout>
      <h1 className="text-4xl font-black text-center">
        {currentCategory?.name}
      </h1>
      <p className="text-2xl my-10 text-center">
        Elige y personaliza tu pedido a continuación
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </div>
    </MainLayout>
  );
};
