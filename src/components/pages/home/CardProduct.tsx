import { FC, useContext } from 'react';
import { SeedProduct } from '../../../data/seed-data';
import { formatPrice } from '../../../helpers/format-price';
import { QuioscoContext } from '../../../context';

interface ProductProps {
  product: SeedProduct;
}

export const CardProduct: FC<ProductProps> = ({ product }) => {
  const { onShowProductModal } = useContext(QuioscoContext);
  const { id, image, name, price } = product;

  return (
    <div className="border p-3 shadow bg-white">
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
          className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-full mt-5 w-full uppercase  tracking-widest"
          onClick={() => onShowProductModal(id)}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};