import { IUser } from './user.interface';

export interface AuthResponse {
  token: string;
  user: IUser;
}

export interface AuthErrorResponse {
  message: string;
  errors: {
    [key: string]: string[];
  };
}
