import { RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';
import router from './router/app.router';
import { CartProvider, QuioscoProvider, AuthProvider } from './context';

const FreshApp = () => {
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

export default FreshApp;
