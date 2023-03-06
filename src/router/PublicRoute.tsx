import { FC, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context';

interface PropsPublicRoute {
  component: FC;
}

export const PublicRoute: FC<PropsPublicRoute> = ({
  component: Component,
  ...rest
}) => {
  const { user } = useContext(AuthContext);

  return user && user.id ? <Navigate to="/" /> : <Component {...rest} />;
};
