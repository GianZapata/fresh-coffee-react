import { createBrowserRouter } from 'react-router-dom';
import { MainLayout, AuthLayout } from '../layouts';
import { LoginPage, HomePage, RegisterPage } from '../pages';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: '/auth/login',
        element: <LoginPage />,
      },
      {
        path: '/auth/register',
        element: <RegisterPage />,
      },
    ],
  },
]);
export default appRouter;
