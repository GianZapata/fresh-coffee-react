import { FC, useContext } from 'react';
import { formatPrice } from '../../../helpers/format-price';
import { QuioscoContext } from '../../../context';
import { IProduct } from '../../../interfaces';

interface ProductProps {
  product: IProduct;
}

export const CardProduct: FC<ProductProps> = ({ product }) => {
  const { showProductModal } = useContext(QuioscoContext);
  const { id, image, name, price } = product;

  return (
    <div className="border p-3 shadow bg-white opacity-90 hover:opacity-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 animate-fade-in">
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
          onClick={() => showProductModal(id)}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};
