import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from '../layouts';
import { LoginPage, HomePage, SignupPage } from '../pages';
import { PrivateRoute, PublicRoute } from '.';

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
]);
export default AppRouter;
