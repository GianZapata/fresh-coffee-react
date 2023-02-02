import { RouterProvider } from 'react-router-dom';
import router from './router';
import { CartProvider, QuioscoProvider } from './context';

const freshCoffeeApp = () => {
  return (
    <>
      <QuioscoProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </QuioscoProvider>
    </>
  );
};

export default freshCoffeeApp;
