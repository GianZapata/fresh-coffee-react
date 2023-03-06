import { useContext, useEffect, useState, PropsWithChildren, FC } from 'react';
import { Outlet } from 'react-router-dom';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';

import { Sidebar, Summary } from '../components/layouts/main';
import { ModalProduct } from '../components/pages/home/ModalProduct';
import { QuioscoContext } from '../context';

import 'react-toastify/dist/ReactToastify.css';
Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const MainLayout: FC<PropsWithChildren> = (): JSX.Element => {
  const { showModal } = useContext(QuioscoContext);

  const [isLoadingPage, setIsLoadingPage] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingPage(false);
    }, 1000);
  }, []);

  if (isLoadingPage) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin  h-32 w-32 border-indigo-600 border-b-4 border-r-4 rounded-full"></div>
      </div>
    );
  }
  return (
    <div className="md:flex">
      <Sidebar />
      <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
        <Outlet />
      </main>
      <Summary />
      <Modal isOpen={showModal} style={customStyles}>
        <ModalProduct />
      </Modal>
      <ToastContainer />
    </div>
  );
};
