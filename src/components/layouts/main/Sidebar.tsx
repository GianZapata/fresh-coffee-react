import { Category } from './Category';
import { QuioscoContext, AuthContext } from '../../../context';
import { useContext } from 'react';

export const Sidebar = () => {
  const { categories } = useContext(QuioscoContext);
  const { user, logoutUser } = useContext(AuthContext);

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
          className="text-center bg-red-600 hover:bg-red-800 w-full py-2 px-4 font-bold text-white rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 uppercase"
          onClick={logoutUser}
        >
          Cancelar orden
        </button>
      </div>
    </aside>
  );
};
