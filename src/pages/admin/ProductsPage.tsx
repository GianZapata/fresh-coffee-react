import freshCoffeeApi from '../../api/freshApi';
import { IProduct } from '../../interfaces/product.interface';
import useSWR from 'swr';
import { formatPrice } from '../../helpers/format-price';
export const ProductsPage = () => {
  const accessToken = localStorage.getItem('accessToken');

  const fetcher = () =>
    freshCoffeeApi
      .get<{ data: IProduct[] }>('/api/products', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data.data);

  const { data: products, isLoading } = useSWR('/api/products', fetcher, {
    refreshInterval: 10000,
  });

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1 className="text-4xl font-black">Productos</h1>
      <p className="text-2xl my-10">Maneja la disponibilidad desde aquí</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {products &&
          products.map(({ name, image, price, id }) => (
            <div
              key={id}
              className="border p-3 shadow bg-white opacity-90 hover:opacity-100 transition duration-500 ease-in-out"
            >
              <img
                alt={`Imagen ${name}`}
                src={`/img/${image}.jpg`}
                className="w-full"
              />
              <div className="p-5">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                  {formatPrice(price)}
                </p>
                <button
                  type="button"
                  className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-full mt-5 w-full uppercase transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
                  // onClick={() => showProductModal(id)}
                >
                  Producto Agotado
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
