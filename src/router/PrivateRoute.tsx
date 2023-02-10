import { FC, useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../context';

interface PropsPrivateRoute {
  component: FC;
}

export const PrivateRoute: FC<PropsPrivateRoute> = ({
  component: Component,
  ...rest
}) => {
  const { isLoggedIn } = useContext(AuthContext);

  const { pathname, search } = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  return isLoggedIn ? <Component {...rest} /> : <Navigate to="/auth/login" />;
};
