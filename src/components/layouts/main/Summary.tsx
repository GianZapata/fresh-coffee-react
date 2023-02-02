import { useContext, useMemo } from 'react';
import { CartContext } from '../../../context';
import { SummaryProduct } from './SummaryProduct';
import { formatPrice } from '../../../helpers/format-price';

export const Summary = () => {
  const { cart, total } = useContext(CartContext);

  const isCartEmpty = useMemo(() => cart.length === 0, [cart]);

  return (
    <aside className="md:w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black">Mi pedido</h1>
      <p className="text-lg my-5">
        Aquí podrás ver el resumen y total de tu pedido
      </p>
      <div className="py-10">
        {!isCartEmpty ? (
          cart.map((product) => (
            <SummaryProduct key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text2xl">
            No hay elementos en tu pedido aún
          </p>
        )}
      </div>
      <p className="text-xl mt-10">
        Total: {''} {formatPrice(total)}
      </p>
      <form className="w-full">
        <div className="mt-5">
          <button
            type="submit"
            className={`w-full text-white font-bold py-2 px-4 rounded-full uppercase transition duration-200 ease-in-out ${
              isCartEmpty
                ? 'bg-indigo-100'
                : 'bg-indigo-600 hover:bg-indigo-800'
            }`}
            onClick={() => console.log('Confirmar pedido')}
            disabled={isCartEmpty}
          >
            Confirmar pedido
          </button>
        </div>
      </form>
    </aside>
  );
};
