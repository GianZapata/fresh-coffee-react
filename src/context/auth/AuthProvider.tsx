import { FC, PropsWithChildren, useReducer } from 'react';
import { AuthContext, authReducer } from './';
import freshCoffeeApi from '../../api/freshApi';
import { AuthResponse, IUser } from '../../interfaces';
import {} from '../../interfaces/user.interface';

export interface AuthState {
  isLoggedIn: boolean;
  user: IUser | null;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: null,
};

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  const loginUser = async (userValues: {
    email: string;
    password: string;
  }): Promise<boolean> => {
    try {
      const { data } = await freshCoffeeApi.post<AuthResponse>(
        '/auth/login',
        userValues,
      );
      const { token, user } = data;
      dispatch({ type: '[Auth] - Login', payload: user });
      return true;
    } catch (error) {
      console.log('🚀 ~ file: AuthProvider.tsx ~ line 42 ~ error', error);
      return false;
    }
  };

  const registerUser = async (userValues: {
    name: string;
    email: string;
    password: string;
  }): Promise<{ hasError: boolean; message?: string }> => {
    try {
      const { data } = await freshCoffeeApi.post<AuthResponse>(
        '/auth/signup',
        userValues,
      );
      const { token, user } = data;
      // Cookies.set('token', token as string);
      dispatch({ type: '[Auth] - Login', payload: user });
      return {
        hasError: false,
      };
    } catch (err) {
      console.log('🚀 ~ file: AuthProvider.tsx ~ line 42 ~ error', err);

      // const { message, error } = handleAxiosError(err);
      // if (error !== 'unknown') {
      //   return { hasError: true, message };
      // }
    }
    return {
      hasError: true,
      message: 'No se pudo crear el usuario - intente de nuevo',
    };
  };

  const logoutUser = () => {
    console.log('🚀 ~ file: AuthProvider.tsx ~ line 42 ~ logoutUser');
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        // Methods
        loginUser,
        logoutUser,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
