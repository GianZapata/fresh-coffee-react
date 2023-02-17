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
  const { user } = useContext(AuthContext);

  const { pathname, search } = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  return user && user.id && user?.isAdmin ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/auth/login" />
  );
};
