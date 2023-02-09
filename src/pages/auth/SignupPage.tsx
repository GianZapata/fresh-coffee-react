import { Link } from 'react-router-dom';
import { useRef, useContext, useState } from 'react';
import freshCoffeeApi from '../../api/freshApi';

import { Alert } from '../../components/ui/Alert';
import { AuthErrorResponse, AuthResponse } from '../../interfaces';

export const SignupPage = () => {
  // const {} = useContext(AuthContext);

  const [errors, setErrors] = useState<AuthErrorResponse>();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);

  const onSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const passwordConfirmation = passwordConfirmationRef.current?.value;

    const signupValues = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };

    try {
      const { data } = await freshCoffeeApi.post<AuthResponse>(
        '/api/auth/signup',
        signupValues,
      );
      console.log(data);
    } catch (error: any) {
      setErrors(error.response.data as AuthErrorResponse);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p>Crea tu Cuenta llenando el formulario</p>
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form onSubmit={onSignup} className="space-y-5" noValidate>
          {errors && errors.errors
            ? Object.keys(errors.errors).map((error) => (
                <Alert key={error}>
                  {errors.errors[error as keyof typeof errors.errors]}
                </Alert>
              ))
            : null}
          <div>
            <label className="text-slate-800" htmlFor="name">
              Nombre:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="mt-2 block p-3 bg-gray-50 w-full outline-none"
              placeholder="Tu Nombre"
              ref={nameRef}
            />
          </div>
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
            />
          </div>
          <div>
            <label className="text-slate-800" htmlFor="password-confirmation">
              Repetir Contraseña:
            </label>
            <input
              id="password-confirmation"
              type="password"
              name="password-confirmation"
              className="mt-2 block p-3 bg-gray-50 w-full outline-none"
              placeholder="Repite tu Contraseña"
              ref={passwordConfirmationRef}
            />
          </div>

          <input
            type="submit"
            value="Crear Cuenta"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-md transition duration-300"
          />
        </form>
        <div className="mt-5">
          <p className="text-sm text-gray-500">
            ¿Ya tienes una cuenta?{' '}
            <Link
              to="/auth/login"
              className="text-indigo-600 hover:underline cursor-pointer"
            >
              Inicia Sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
