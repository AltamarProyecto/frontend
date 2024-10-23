import React from 'react';
import { FaHome, FaCalendar, FaMoneyCheckAlt, FaWallet, FaClipboard } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export function Navbar({ activePage }) {
  const navigate = useNavigate(); 

  const getLinkStyle = (page) => {
    if (page === activePage) {
      return {
        className:
          "flex items-center text-white font-semibold p-3 rounded-2xl shadow-lg cursor-pointer", 
        style: {
          background: "linear-gradient(90deg, #087592 0%, #2393B0 100%)",
        },
      };
    } else {
      return {
        className:
          "flex items-center text-gray-600 hover:text-[#087592] p-3 cursor-pointer", 
      };
    }
  };

  return (
    <aside className="w-80 bg-white shadow-md p-5 pl-8 pr-8 sticky top-0 h-screen">
      <div className="text-3xl mb-6">
        Host<span className="font-bold text-black">Mate</span>
      </div>
      <nav className="flex flex-col space-y-4">
        <div
          {...getLinkStyle('Pagina Principal')}
          onClick={() => navigate('/')} 
        >
          <div className="w-6 flex-shrink-0 flex justify-center">
            <FaHome className="text-lg" />
          </div>
          <span className="ml-4">Pagina Principal</span>
        </div>
        <div
          {...getLinkStyle('Calendario')}
          onClick={() => navigate('/calendario')} 
        >
          <div className="w-6 flex-shrink-0 flex justify-center">
            <FaCalendar className="text-lg" />
          </div>
          <span className="ml-4">Calendario</span>
        </div>
        <div
          {...getLinkStyle('Gestion Reservas')}
          onClick={() => navigate('/gestion-reservas')}
        >
          <div className="w-6 flex-shrink-0 flex justify-center">
            <FaMoneyCheckAlt className="text-lg" />
          </div>
          <span className="ml-4">Gestion Reservas</span>
        </div>
        <div
          {...getLinkStyle('Pagos')}
          onClick={() => navigate('/pagos')} 
        >
          <div className="w-6 flex-shrink-0 flex justify-center">
            <FaWallet className="text-lg" />
          </div>
          <span className="ml-4">Pagos</span>
        </div>
        <div
          {...getLinkStyle('Agenda Actividades')}
          onClick={() => navigate('/agenda-actividades')}
        >
          <div className="w-6 flex-shrink-0 flex justify-center">
            <FaClipboard className="text-lg" />
          </div>
          <span className="ml-4">Agenda Actividades</span>
        </div>
      </nav>
    </aside>
  );
}
