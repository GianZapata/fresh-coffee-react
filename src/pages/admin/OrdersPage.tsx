import useSWR from 'swr';
import freshCoffeeApi from '../../api';
import { IOrder } from '../../interfaces';
import { formatPrice } from '../../helpers/format-price';
import { CartContext } from '../../context';
import { useContext } from 'react';

export const OrdersPage = () => {
  const { completeOrder } = useContext(CartContext);

  const accessToken = localStorage.getItem('accessToken');

  const fetcher = () =>
    freshCoffeeApi
      .get<{ data: IOrder[] }>('/api/orders', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data.data);

  const { data: orders, isLoading } = useSWR('/api/orders', fetcher, {
    refreshInterval: 1000,
  });

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1 className="text-4xl font-black">Ordenes</h1>
      <p className="text-2xl my-10">Administra las ordenes desde aquí</p>

      <div className="grid grid-cols-2 gap-5">
        {orders &&
          orders.map((order) => (
            <div
              key={order.id}
              className="p-5 bg-white shadow space-y-3 border border-gray-200 border-b"
            >
              <p className="text-xl font-bold text-slate-600">
                Contenido del Pedido: #{order.id}
              </p>
              {order.products.map((product) => (
                <div
                  key={product.id}
                  className="border-b border-b-slate-200 last-of-type:border-none py-4"
                >
                  <p className="text-sm">ID: {product.id}</p>
                  <p className="text-sm">Nombre: {product.name}</p>
                  <p>
                    Cantidad:{' '}
                    <span className="font-bold">{product.pivot.quantity}</span>
                  </p>
                </div>
              ))}
              <p className="text-lg font-bold text-slate-600">
                Cliente:
                <span className="font-normal"> {order.user?.name}</span>
              </p>
              <p className="text-lg font-bold text-amber-600">
                Total a Pagar:
                <span className="font-normal text-slate-600">
                  {' '}
                  {formatPrice(order.total)}
                </span>
              </p>
              <button
                type="button"
                className="flex justify-center items-center text-center bg-indigo-600 hover:bg-indigo-800 w-full py-2 px-4 font-bold text-white rounded-full transition duration-500 ease-in-out uppercase cursor-pointer transform hover:-translate-y-1 hover:scale-110"
                onClick={() => completeOrder(order.id)}
              >
                Completar
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
