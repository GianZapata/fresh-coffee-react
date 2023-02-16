import { AdminSidebar } from '../components/layouts/admin';
import { PropsWithChildren, FC } from 'react';
import { Outlet } from 'react-router-dom';

export const AdminLayout: FC<PropsWithChildren> = (): JSX.Element => {
  return (
    <div className="md:flex">
      <AdminSidebar />
      <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
        <Outlet />
      </main>
    </div>
  );
};
