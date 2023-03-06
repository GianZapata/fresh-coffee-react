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
    <div className="py-5">
      <h1 className="text-4xl font-black text-gray-800 mb-3">Productos</h1>
      <p className="text-lg font-medium text-gray-800">
        Maneja la disponibilidad desde aquí
      </p>
      <div className="max-w-7xl mx-auto">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
              >
                Todos
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                Disponibles
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
              >
                No disponibles
              </a>
            </li>
          </ul>
        </div>
        <table className="w-full text-sm text-left text-gray-500 my-5">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <h1 className="text-4xl font-black">Productos</h1>
  //     <p className="text-2xl my-10">Maneja la disponibilidad desde aquí</p>
  //     <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
  //       {products &&
  //         products.map(({ name, image, price, id }) => (
  //           <div
  //             key={id}
  //             className="border p-3 shadow bg-white opacity-90 hover:opacity-100 transition duration-500 ease-in-out"
  //           >
  //             <img
  //               alt={`Imagen ${name}`}
  //               src={`/img/${image}.jpg`}
  //               className="w-full"
  //             />
  //             <div className="p-5">
  //               <h3 className="text-2xl font-bold">{name}</h3>
  //               <p className="mt-5 font-black text-4xl text-amber-500">
  //                 {formatPrice(price)}
  //               </p>
  //               <button
  //                 type="button"
  //                 className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-full mt-5 w-full uppercase transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
  //                 // onClick={() => showProductModal(id)}
  //               >
  //                 Producto Agotado
  //               </button>
  //             </div>
  //           </div>
  //         ))}
  //     </div>
  //   </div>
  // );
};
