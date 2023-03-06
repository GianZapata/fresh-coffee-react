import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const AuthLayout = () => {
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoadingPage(false);
  //   }, 1000);
  // }, []);

  // if (isLoadingPage) {
  //   return (
  //     <div className="flex flex-col items-center justify-center h-screen w-screen dark:bg-gray-00">
  //       <div className="animate-spin h-32 w-32 border-indigo-600 border-b-4 border-r-4 rounded-full"></div>
  //     </div>
  //   );
  // }

  return (
    <main className="max-w-2xl m-auto mt-10 md:mt-28 flex flex-col items-center">
      <img
        src="/img/logo.svg"
        alt="Imagen Logotipo"
        className="max-w-xs h-auto "
      />
      <div className="p-10 w-full">
        <Outlet />
      </div>
    </main>
  );
};
