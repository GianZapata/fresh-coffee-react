import { RouterProvider } from 'react-router-dom';
import router from './router';
import { CartProvider, QuioscoProvider, AuthProvider } from './context';
import { SWRConfig } from 'swr';

const freshCoffeeApp = () => {
  return (
    <>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <AuthProvider>
          <QuioscoProvider>
            <CartProvider>
              <RouterProvider router={router} />
            </CartProvider>
          </QuioscoProvider>
        </AuthProvider>
      </SWRConfig>
    </>
  );
};

export default freshCoffeeApp;
