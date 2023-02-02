import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p>Crea tu Cuenta llenando el formulario</p>
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form action="" className="space-y-5">
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
