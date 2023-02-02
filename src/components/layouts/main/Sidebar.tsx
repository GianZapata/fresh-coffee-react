import { Category } from './Category';
import { QuioscoContext } from '../../../context';
import { useContext } from 'react';

export const Sidebar = () => {
  const { categories } = useContext(QuioscoContext);

  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img src="/img/logo.svg" alt="" className="w-40" />
      </div>

      <div className="mt-10">
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </div>

      <div className="my-5 px-5">
        <button
          type="button"
          className="text-center bg-red-500 hover:bg-red-800 w-full p-3 font-bold text-white rounded-full transition duration-300"
        >
          Cancelar orden
        </button>
      </div>
    </aside>
  );
};
