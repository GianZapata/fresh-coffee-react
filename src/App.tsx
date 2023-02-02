import { RouterProvider } from 'react-router-dom';
import router from './router';
import { CartProvider, QuioscoProvider } from './context';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const freshCoffeeApp = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <QuioscoProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </QuioscoProvider>
      </QueryClientProvider>
    </>
  );
};

export default freshCoffeeApp;
