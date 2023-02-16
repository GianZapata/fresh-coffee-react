import { useContext, FC } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../context';

interface PropsPrivateRoute {
  component: FC;
}

export const AdminRoute: FC<PropsPrivateRoute> = ({
  component: Component,
  ...rest
}) => {
  const { isLoggedIn, isAdmin } = useContext(AuthContext);

  const { pathname, search } = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  return isLoggedIn && isAdmin ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/auth/login" />
  );
};
