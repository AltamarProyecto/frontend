import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left ml-auto">
      {/* Botón del dropdown */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between font-medium border rounded-xl px-2 border-none"
        style={{ minWidth: '200px' }} // Ajustar el ancho mínimo según necesidad
      >
        <div className="leading-none text-left">
          <div className="text-black text-sm">Altamar</div>
          <div className="text-xs text-gray-500 font-extralight">Casas de playa</div>
        </div>
        {/* Flecha hacia abajo */}
        <span className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} text-black`}>
          &#x25BC;
        </span>
      </button>

      {/* Contenido del menú desplegable */}
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg right-0">
          <button
            onClick={() => console.log("Ir a nuestras unidades")}
            className="block w-full px-3 py-2 text-left font-light text-sm text-gray-700 hover:bg-gray-100"
          >
            Ir a nuestras unidades
          </button>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
