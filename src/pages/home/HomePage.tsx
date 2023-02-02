import { useContext } from 'react';
import { CardProduct } from '../../components/pages/home/CardProduct';
import { QuioscoContext } from '../../context';

export const HomePage = () => {
  const { products } = useContext(QuioscoContext);

  return (
    <>
      <h1 className="text-4xl font-black">Home</h1>
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
