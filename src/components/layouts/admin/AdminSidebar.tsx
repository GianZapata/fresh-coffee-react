import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faTag, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../../context';

export const AdminSidebar = () => {
  const { logoutUser } = useContext(AuthContext);

  const [isClosingSession, setIsClosingSession] = useState(false);

  return (
    <aside className="md:w-72 h-screen">
      <div className="p-4">
        <img src="/img/logo.svg" alt="Imagen Logotipo" className="w-40" />
      </div>
      <nav className="flex flex-col">
        <NavLink
          to={'/admin/orders'}
          className={({ isActive }) =>
            `font-bold text-lg  py-2 px-4 ${
              isActive
                ? 'bg-yellow-600 text-slate-900'
                : 'text-slate-900 hover:bg-gray-200'
            }`
          }
        >
          <FontAwesomeIcon icon={faTruck} />
          <span className="ml-2">Pedidos</span>
        </NavLink>
        <NavLink
          to={'/admin/products'}
          className={({ isActive }) =>
            `font-bold text-lg  py-2 px-4 ${
              isActive
                ? 'bg-yellow-600 text-slate-900'
                : 'text-slate-900 hover:bg-gray-200'
            }`
          }
        >
          <FontAwesomeIcon icon={faTag} />
          <span className="ml-2">Productos</span>
        </NavLink>
      </nav>
      <div className="my-5 px-5">
        <button
          type="button"
          className={`flex justify-center items-center text-center bg-red-600 hover:bg-red-800 w-full py-2 px-4 font-bold text-white rounded-full transition duration-500 ease-in-out uppercase ${
            isClosingSession
              ? 'opacity-50 cursor-not-allowed'
              : 'cursor-pointer transform hover:-translate-y-1 hover:scale-110 '
          }`}
          onClick={() => {
            setIsClosingSession(true);
            logoutUser();
          }}
          disabled={isClosingSession}
        >
          {isClosingSession ? (
            <>
              <FontAwesomeIcon
                icon={faSpinner}
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              />
              Cerrando sesi??n...
            </>
          ) : (
            'Cerrando sesi??n'
          )}
        </button>
      </div>
    </aside>
  );
};
