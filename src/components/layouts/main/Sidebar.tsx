import { Category } from './Category';
import { QuioscoContext } from '../../../context';
import { useContext } from 'react';
import { useAuth } from '../../../hooks/useAuth';

export const Sidebar = () => {
  const { categories } = useContext(QuioscoContext);

  const { logoutUser, user } = useAuth({
    middleware: 'auth',
  });

  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img src="/img/logo.svg" alt="" className="w-40" />
      </div>

      {user ? (
        <div className="p-4">
          <h1 className="text-2xl font-bold">Hola {user?.name}</h1>
        </div>
      ) : null}

      <div className="mt-10">
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </div>

      <div className="my-5 px-5">
        <button
          type="button"
          className="text-center bg-red-500 hover:bg-red-800 w-full p-3 font-bold text-white rounded-full transition duration-300"
          onClick={logoutUser}
        >
          Cancelar orden
        </button>
      </div>
    </aside>
  );
};
