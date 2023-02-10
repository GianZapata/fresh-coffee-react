import { FC, useContext } from 'react';
import { AuthContext } from '../context';
import { Navigate } from 'react-router-dom';

interface PropsPublicRoute {
  component: FC;
}

export const PublicRoute: FC<PropsPublicRoute> = ({
  component: Component,
  ...rest
}) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <Navigate to="/" /> : <Component {...rest} />;
};
