import { FC, PropsWithChildren, useReducer, useEffect } from 'react';
import { AuthContext, authReducer } from './';
import freshCoffeeApi from '../../api/freshApi';
import { AuthResponse, IUser } from '../../interfaces';

export interface AuthState {
  isLoggedIn: boolean;
  user: IUser | null;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: !!localStorage.getItem('accessToken'),
  user: JSON.parse(localStorage.getItem('user') || 'null') || null,
};

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  const accessToken = localStorage.getItem('accessToken');

  const loginUser = async (
    email: string,
    password: string,
  ): Promise<boolean> => {
    try {
      const { data } = await freshCoffeeApi.post<AuthResponse>(
        '/api/auth/login',
        { email, password },
      );
      const { token, user } = data;
      localStorage.setItem('accessToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: '[Auth] - Login', payload: user });
      return true;
    } catch (error) {
      return false;
    }
  };

  const signupUser = async (userValues: {
    name: string;
    email: string;
    password: string;
  }): Promise<{ hasError: boolean; errors?: { [key: string]: string[] } }> => {
    try {
      const { data } = await freshCoffeeApi.post<AuthResponse>(
        '/auth/signup',
        userValues,
      );
      const { token, user } = data;
      localStorage.setItem('accessToken', token);
      dispatch({ type: '[Auth] - Login', payload: user });
      return {
        hasError: false,
      };
    } catch (err) {}
    return {
      hasError: true,
      errors: {
        custom: ['Hubo un error al crear el usuario'],
      },
    };
  };

  const logoutUser = async () => {
    try {
      await freshCoffeeApi.post(`/api/auth/logout`, null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      dispatch({ type: '[Auth] - Logout' });
    } catch (error) {}
  };

  const checkToken = async () => {
    try {
      const { data } = await freshCoffeeApi.get<IUser>('/api/auth/user', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      localStorage.setItem('user', JSON.stringify(data));
      dispatch({ type: '[Auth] - Login', payload: data });
    } catch (error) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      dispatch({ type: '[Auth] - Logout' });
    }
  };

  useEffect(() => {
    if (accessToken) {
      checkToken();
    }
  }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        // Methods
        loginUser,
        logoutUser,
        signupUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
