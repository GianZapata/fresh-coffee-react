import { useContext, useEffect, useState, PropsWithChildren, FC } from 'react';
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

export const MainLayout: FC<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  const { showModal, categories } = useContext(QuioscoContext);

  useEffect(() => {
    if (categories.length > 0) {
      setIsLoading(false);
    }
  }, [categories]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="md:flex">
      <Sidebar />
      <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
        {children}
      </main>
      <Summary />
      <Modal isOpen={showModal} style={customStyles}>
        <ModalProduct />
      </Modal>
      <ToastContainer />
    </div>
  );
};
