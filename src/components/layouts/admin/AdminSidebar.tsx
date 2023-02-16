import { Link } from 'react-router-dom';

export const AdminSidebar = () => {
  return (
    <aside className="md:w-72 h-screen">
      <div className="p-4">
        <img src="/img/logo.svg" alt="Imagen Logotipo" className="w-40" />
      </div>
      <nav>
        <Link to={'/admin/orders'} className="font-bold text-lg">
          <i className="fas fa-shopping-cart"></i> Pedidos
        </Link>
      </nav>
    </aside>
  );
};
