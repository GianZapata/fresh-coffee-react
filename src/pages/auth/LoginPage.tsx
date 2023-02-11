import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useContext } from 'react';
import { AuthContext } from '../../context';

export const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const lastPath = localStorage.getItem('lastPath') || '/';

  const [errors, setErrors] = useState<{ [key: string]: string[] } | null>();
  const [isSending, setIsSending] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setErrors(null);

    const email = emailRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();

    if (!email || !password) {
      setIsSending(false);
      setErrors({
        email: ['El campo email es requerido'],
        password: ['El campo password es requerido'],
      });
      setTimeout(() => {
        setErrors(null);
      }, 3000);
      return;
    }

    const isValidLogin = await loginUser(email, password);

    if (!isValidLogin) {
      setIsSending(false);
      setErrors({
        email: ['El email o la contraseña son incorrectos'],
      });
      setTimeout(() => {
        setErrors(null);
      }, 3000);
      return;
    }
    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-black text-center">Iniciar Sesión</h1>
      <p className="text-center text-gray-500 text-sm">
        Para crear un pedido debes iniciar sesión
      </p>
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form onSubmit={onLogin} className="space-y-5" noValidate>
          {errors && Object.keys(errors).length > 0
            ? Object.keys(errors).map((error) => (
                <div
                  className="flex p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 "
                  key={error}
                >
                  <ul className="list-disc list-inside">
                    {errors[error].map((err, i) => (
                      <li className="text-sm font-medium text-red-700" key={i}>
                        {err}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            : null}
          <div>
            <label className="text-slate-800 font-bold" htmlFor="email">
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
            <label className="text-slate-800 font-bold" htmlFor="password">
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
          <button
            type="submit"
            className={`flex justify-center items-center bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold rounded-md transition duration-300 ${
              isSending
                ? 'opacity-50 cursor-not-allowed'
                : 'cursor-pointer transform hover:-translate-y-1 hover:scale-110 '
            }`}
            disabled={isSending}
          >
            {isSending ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Iniciando Sesión...
              </>
            ) : (
              <>Iniciar Sesión</>
            )}
          </button>
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
