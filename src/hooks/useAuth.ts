import { useEffect } from 'react';
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';
import freshCoffeeApi from '../api/freshApi';
import { AuthResponse } from '../interfaces';
import { IUser } from '../interfaces/user.interface';

export const useAuth = ({
  middleware,
  redirectTo,
}: {
  middleware?: 'auth' | 'guest';
  redirectTo?: string;
}) => {
  const accessToken = localStorage.getItem('access_token');
  const navigate = useNavigate();

  const {
    data: user,
    error,
    mutate,
  } = useSWR('/api/auth/user', () =>
    freshCoffeeApi
      .get<IUser>(`/api/auth/user`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data),
  );

  const loginUser = async (userValues: {
    email: string;
    password: string;
  }): Promise<boolean> => {
    try {
      const { data } = await freshCoffeeApi.post<AuthResponse>(
        '/api/auth/login',
        userValues,
      );
      const { token } = data;
      localStorage.setItem('access_token', token);
      await mutate();
      return true;
    } catch (error) {
      return false;
    }
  };

  const signupUser = async () => {
    console.log('signup');
  };

  const logoutUser = async () => {
    try {
      await freshCoffeeApi.post(`/api/auth/logout`, null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      localStorage.removeItem('access_token');
      await mutate(undefined);
    } catch (error) {}
  };

  useEffect(() => {
    if (middleware === 'guest' && redirectTo && user) {
      navigate(redirectTo);
    }

    if (middleware === 'auth' && error) {
      navigate('/auth/login');
    }
  }, [user, error]);

  return { loginUser, signupUser, logoutUser, user };
};
