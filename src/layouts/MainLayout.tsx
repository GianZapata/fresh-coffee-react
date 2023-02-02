import { Outlet } from 'react-router-dom';
import Modal from 'react-modal';
import { Sidebar, Summary } from '../components/layouts/main';
import { useContext } from 'react';
import { QuioscoContext } from '../context/quiosco/QuioscoContext';
import { ModalProduct } from '../components/pages/home/ModalProduct';

import { ToastContainer } from 'react-toastify';
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

export const MainLayout = (): JSX.Element => {
  const { showModal } = useContext(QuioscoContext);

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
