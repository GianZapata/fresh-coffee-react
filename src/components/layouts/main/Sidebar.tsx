import { Category } from './Category';
import { QuioscoContext, AuthContext } from '../../../context';
import { useContext, useState } from 'react';

export const Sidebar = () => {
  const { categories } = useContext(QuioscoContext);
  const { user, logoutUser } = useContext(AuthContext);

  const [isCancelingOrder, setIsCancelingOrder] = useState(false);

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
          className={`flex justify-center items-center text-center bg-red-600 hover:bg-red-800 w-full py-2 px-4 font-bold text-white rounded-full transition duration-500 ease-in-out uppercase ${
            isCancelingOrder
              ? 'opacity-50 cursor-not-allowed'
              : 'cursor-pointer transform hover:-translate-y-1 hover:scale-110 '
          }`}
          onClick={() => {
            setIsCancelingOrder(true);
            logoutUser();
          }}
          disabled={isCancelingOrder}
        >
          {isCancelingOrder ? (
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
              Cancelando orden...
            </>
          ) : (
            'Cancelar orden'
          )}
        </button>
      </div>
    </aside>
  );
};
