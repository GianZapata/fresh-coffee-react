import { createBrowserRouter } from 'react-router-dom';
import { MainLayout, AuthLayout } from '../layouts';
import { LoginPage, HomePage, SignupPage } from '../pages';

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
        path: '/auth/signup',
        element: <SignupPage />,
      },
    ],
  },
]);
export default appRouter;
