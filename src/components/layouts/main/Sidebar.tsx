import { Category } from './Category';
import { initialData } from '../../../data/seed-data';

export const Sidebar = () => {
  const categories = initialData.categories;
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
          className="text-center bg-red-500 w-full p-3 font-bold text-white rounded-md truncate"
        >
          Cancelar orden
        </button>
      </div>
    </aside>
  );
};
