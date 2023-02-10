import { useContext, useState, useEffect, useMemo } from 'react';
import { QuioscoContext, CartContext } from '../../../context';
import { formatPrice } from '../../../helpers/format-price';
import { ICartProduct } from '../../../interfaces';
import { ProductCounter } from './ProductCounter';

export const ModalProduct = () => {
  const { currentProduct, hideProductModal } = useContext(QuioscoContext);
  const { addProductToCart, cart } = useContext(CartContext);

  if (!currentProduct) return null;

  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    id: currentProduct.id,
    name: currentProduct.name,
    price: currentProduct.price,
    quantity: 1,
  });

  const onAddProduct = () => {
    if (tempCartProduct.quantity === 0) return;
    addProductToCart(tempCartProduct);
    hideProductModal();
  };

  const onUpdateQuantity = ({ count }: { count: number }) => {
    setTempCartProduct((oldShoppingCart) => ({
      ...oldShoppingCart,
      quantity: count,
    }));
  };

  const productInCart = useMemo(() => {
    return cart.find((product) => product.id === currentProduct.id);
  }, [cart, currentProduct.id]);

  useEffect(() => {
    if (productInCart) onUpdateQuantity({ count: productInCart.quantity });
  }, []);

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <img
          src={`/img/${currentProduct.image}.jpg`}
          alt={`Imagen producto ${currentProduct.name}`}
          className="w-full"
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={hideProductModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5"> {currentProduct.name}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatPrice(currentProduct.price)}
        </p>

        <div className="flex gap-4 mt-5">
          <ProductCounter
            onUpdateQuantity={onUpdateQuantity}
            product={tempCartProduct}
            initialValues={{ maxCount: 5 }}
            value={tempCartProduct.quantity}
          />
        </div>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-full mt-5 uppercase transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
          onClick={onAddProduct}
        >
          {productInCart ? 'Guardar cambios' : 'Agregar al pedido'}
        </button>
      </div>
    </div>
  );
};
