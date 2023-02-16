import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AuthLayout, AdminLayout } from '../layouts';
import { PrivateRoute, PublicRoute, AdminRoute } from '.';
import {
  LoginPage,
  HomePage,
  SignupPage,
  OrdersPage,
  ProductsPage,
} from '../pages';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <PrivateRoute component={HomePage} />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: 'login',
        element: <PublicRoute component={LoginPage} />,
      },
      {
        path: 'signup',
        element: <PublicRoute component={SignupPage} />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        path: 'orders',
        element: <AdminRoute component={OrdersPage} />,
      },
      {
        path: 'products',
        element: <AdminRoute component={ProductsPage} />,
      },
      {
        path: '*',
        element: <Navigate to="/admin/orders" />,
      },
    ],
  },
]);
export default AppRouter;
