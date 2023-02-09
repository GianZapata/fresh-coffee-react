import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Alert } from '../../components/ui/Alert';
import { AuthErrorResponse } from '../../interfaces/auth.interface';

export const LoginPage = () => {
  const { loginUser } = useAuth({ middleware: 'guest', redirectTo: '/' });

  const [errors, setErrors] = useState<AuthErrorResponse>();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = emailRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();

    if (!email || !password) {
      setErrors({
        message: 'Los campos correo y contraseña son requeridos',
        errors: {
          email: email ? [] : ['El campo email es requerido'],
          password: password ? [] : ['El campo password es requerido'],
        },
      });
      return;
    }

    const loginValues = {
      email,
      password,
    };

    loginUser(loginValues);
  };

  return (
    <div>
      <h1 className="text-4xl font-black">Iniciar Sesión</h1>
      <p>Para crear un pedido debes iniciar sesión</p>
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form onSubmit={onLogin} className="space-y-5" noValidate>
          {errors && errors.errors
            ? Object.keys(errors.errors).map((error) => (
                <Alert key={error}>
                  {errors.errors[error as keyof typeof errors.errors]}
                </Alert>
              ))
            : null}
          <div>
            <label className="text-slate-800" htmlFor="email">
              Correo:
            </label>
            <input
              id="email"
              type="text"
              name="email"
              className="mt-2 block p-3 bg-gray-50 w-full outline-none"
              placeholder="Tu Correo"
              ref={emailRef}
              defaultValue="correo@correo.com"
            />
          </div>
          <div>
            <label className="text-slate-800" htmlFor="password">
              Contraseña:
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="mt-2 block p-3 bg-gray-50 w-full outline-none"
              placeholder="Tu Contraseña"
              ref={passwordRef}
              defaultValue="Abc123456!"
            />
          </div>
          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-md transition duration-300"
          />
        </form>
        <div className="mt-5">
          <p className="text-sm text-gray-500">
            ¿No tienes una cuenta?{' '}
            <Link
              to="/auth/signup"
              className="text-indigo-600 hover:underline cursor-pointer"
            >
              Crea una
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
