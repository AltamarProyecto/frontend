import React, { useState } from 'react';
import { Navbar } from '../components/general/Navbar.jsx';
import { FaCalendarAlt, FaPen } from 'react-icons/fa';
import { Autocomplete, TextField } from '@mui/material';

// Simulamos una lista de huéspedes anteriores para buscar
const previousGuests = [
    { nombre: 'Juan Perez', cedula: '12345678', email: 'juan@mail.com', telefono: '099123456' },
    { nombre: 'Maria Gonzalez', cedula: '87654321', email: 'maria@mail.com', telefono: '098765432' },
    // Agrega más huéspedes según sea necesario
  ];

export function GestionReserva() {
    const [isNewGuest, setIsNewGuest] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGuest, setSelectedGuest] = useState(null);

    // Filtrar huéspedes según lo que se escribe en el input
    const filteredGuests = previousGuests.filter((guest) =>
        guest.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="bg-[#F1F6FC] w-screen flex">
            <Navbar activePage="Gestion Reservas" />
            <div className="p-10">
                {/* Buttons Section */}
                <div className="flex space-x-6 mb-6">
                    <button className="flex items-center justify-between px-6 py-2 bg-[#81D0DF] hover:bg-[#5db2c3] text-white font-semibold rounded-2xl shadow-lg">
                        Añadir Reserva
                        <FaCalendarAlt className="ml-2" />
                    </button>
                    <button className="flex items-center justify-between px-6 py-2 bg-[#2393B0] hover:bg-[#307e91] text-white font-semibold rounded-2xl shadow-lg">
                        Editar Reserva
                        <FaPen className="ml-2" />
                    </button>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold text-[#087592] ml-2 mb-4">Añadir Reserva</h1>
                    <h3 className="font-semibold ml-2 mb-4 mt-6">Información del Huesped:</h3>
                    <div className="flex bg-white rounded-2xl shadow-lg w-fit mb-8">
                        <button
                            className={`px-6 py-2 font-semibold rounded-2xl focus:outline-none transition-all duration-300 ${
                            isNewGuest ? 'bg-[#2393B0] text-white' : 'bg-white text-[#2393B0]'
                            }`}
                            onClick={() => setIsNewGuest(true)}
                        >
                            Nuevo Huesped
                        </button>
                        <button
                            className={`px-6 py-2 font-semibold rounded-2xl focus:outline-none transition-all duration-300 ${
                            !isNewGuest ? 'bg-[#2393B0] text-white' : 'bg-white text-[#2393B0]'
                            }`}
                            onClick={() => setIsNewGuest(false)}
                        >
                            Huesped Pasado
                        </button>
                    </div>
                    {/* Guest Information Section */}
                    {isNewGuest ? (
                        <div>
                        <h3 className="font-semibold ml-2 mb-4 mt-6">Crear Huesped:</h3>
                        <div className="bg-[#81D0DF] p-8 pb-10 rounded-2xl shadow-lg mb-6 w-full">
                            <div className="grid grid-cols-2 gap-10 w-[1000px]">
                            <div>
                                <label className="block font-semibold mb-2">Nombre del Huesped</label>
                                <input className="w-full p-2 border rounded-2xl" type="text" placeholder="Nombre" />
                            </div>
                            <div>
                                <label className="block font-semibold mb-2">Cédula del Huesped</label>
                                <input className="w-full p-2 border rounded-2xl" type="text" placeholder="Cédula" />
                            </div>
                            </div>
                            <div className="grid grid-cols-2 gap-10 mt-8">
                            <div>
                                <label className="block font-semibold mb-2">Email del Huesped:</label>
                                <input className="w-full p-2 border rounded-2xl" type="email" placeholder="Email" />
                            </div>
                            <div>
                                <label className="block font-semibold mb-2">Telefono del Huesped:</label>
                                <input className="w-full p-2 border rounded-2xl" type="text" placeholder="Telefono" />
                            </div>
                            </div>
                        </div>
                        </div>
                    ) : (
                        <div>
                            <h3 className="font-semibold ml-2 mb-4 mt-6">Seleccionar Huesped:</h3>
                            <div className="bg-[#81D0DF] p-8 pb-10 rounded-2xl shadow-lg mb-6 w-full">
                                {/* Autocomplete de MUI */}
                                <div className="mb-4 w-[1000px]">
                                <label className="block font-semibold mb-2">Buscar Huesped:</label>
                                <Autocomplete
                                    options={previousGuests}
                                    getOptionLabel={(option) => option.nombre}
                                    onChange={(event, newValue) => setSelectedGuest(newValue)}
                                    renderInput={(params) => (
                                    <TextField {...params} label="Seleccionar huesped" variant="outlined" fullWidth />
                                    )}
                                />
                                </div>

                                {/* Mostrar los datos del huésped seleccionado */}
                                {selectedGuest && (
                                <div className="mt-8">
                                    <div className="grid grid-cols-2 gap-10 w-[1000px]">
                                    <div>
                                        <label className="block font-semibold mb-2">Nombre del Huesped</label>
                                        <input
                                        className="w-full p-2 border rounded-2xl"
                                        type="text"
                                        value={selectedGuest.nombre}
                                        disabled
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-semibold mb-2">Cédula del Huesped</label>
                                        <input
                                        className="w-full p-2 border rounded-2xl"
                                        type="text"
                                        value={selectedGuest.cedula}
                                        disabled
                                        />
                                    </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-10 mt-8">
                                    <div>
                                        <label className="block font-semibold mb-2">Email del Huesped:</label>
                                        <input
                                        className="w-full p-2 border rounded-2xl"
                                        type="email"
                                        value={selectedGuest.email}
                                        disabled
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-semibold mb-2">Telefono del Huesped:</label>
                                        <input
                                        className="w-full p-2 border rounded-2xl"
                                        type="text"
                                        value={selectedGuest.telefono}
                                        disabled
                                        />
                                    </div>
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Reservation Information Section */}
                    <h3 className="font-semibold mt-8 ml-2 mb-4">Información de la Reserva:</h3>
                    <div className="bg-[#81D0DF] p-8 pb-10 rounded-2xl shadow-lg mb-6 w-full">
                        <div className="flex flex-wrap gap-20">
                            <div>
                                <label className="block font-semibold mb-2">Cantidad de Personas</label>
                                <input className="w-[100px] p-2 border rounded-2xl" type="number" placeholder="Cantidad de Personas" />
                            </div>
                            <div>
                                <label className="block font-semibold mb-2">Fecha de Inicio</label>
                                <input className="w-[150px] p-2 border rounded-2xl" type="date" />
                            </div>
                            <div>
                                <label className="block font-semibold mb-2">Fecha de Final</label>
                                <input className="w-[150px] p-2 border rounded-2xl" type="date" />
                            </div>
                            <div>
                                <label className="block font-semibold mb-2">Total de noches</label>
                                <input className="w-[100px] p-2 border rounded-2xl" type="number" placeholder="Noches" />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-20 mt-8 relative">
                            <div>
                                <label className="block font-semibold mb-2">Descuento a Aplicar</label>
                                <div className="relative">
                                    <input className="w-[150px] p-2 border rounded-2xl" type="number" placeholder="Descuento" />
                                    <span className="absolute right-8 top-2 text-gray-500">%</span>
                                </div>
                            </div>
                            <div>
                                <label className="block font-semibold mb-2">Incluir Desayuno</label>
                                <div className="flex space-x-4">
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="desayuno" value="si" />
                                        <span>Si</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="desayuno" value="no" />
                                        <span>No</span>
                                    </label>
                                </div>
                            </div>
                            <button
                                className="absolute right-0 bottom-0 px-6 py-2 text-white font-semibold rounded-2xl transition-all duration-300 bg-gradient-to-r from-[#087592] to-[#2393B0] hover:from-[#2393B0] hover:to-[#087592]"
                            >
                                Confirmar
                            </button>

                        </div>
                    </div>
                </div>
                <div className="w-full h-1 bg-[#087592] mt-10 mb-10 rounded-full" />
                <div>
                    <h1 className="text-2xl font-semibold text-[#087592] ml-2 mb-4">Editar Reserva</h1>
                    <h3 className="font-semibold ml-2 mb-4 mt-6">Seleccionar Reserva:</h3>
                    <div className="mb-4 w-[300px]">
                        <Autocomplete
                            options={previousGuests}
                            getOptionLabel={(option) => option.nombre}
                            onChange={(event, newValue) => setSelectedGuest(newValue)}
                            renderInput={(params) => (
                            <TextField {...params} label="Nombre huesped" variant="outlined" fullWidth />
                            )}
                        />
                    </div>
                    
                    {/* Edit Reservation */}
                    <h3 className="font-semibold mt-8 ml-2 mb-4">Información de la Reserva:</h3>
                    <div className="bg-[#81D0DF] p-8 pb-10 rounded-2xl shadow-lg mb-6 w-full">
                        <div className="flex flex-wrap gap-20">
                            <div>
                                <label className="block font-semibold mb-2">Cantidad de Personas</label>
                                <input className="w-[100px] p-2 border rounded-2xl" type="number" placeholder="Cantidad de Personas" />
                            </div>
                            <div>
                                <label className="block font-semibold mb-2">Fecha de Inicio</label>
                                <input className="w-[150px] p-2 border rounded-2xl" type="date" />
                            </div>
                            <div>
                                <label className="block font-semibold mb-2">Fecha de Final</label>
                                <input className="w-[150px] p-2 border rounded-2xl" type="date" />
                            </div>
                            <div>
                                <label className="block font-semibold mb-2">Total de noches</label>
                                <input className="w-[100px] p-2 border rounded-2xl" type="number" placeholder="Noches" />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-20 mt-8 relative">
                            <div>
                                <label className="block font-semibold mb-2">Descuento a Aplicar</label>
                                <div className="relative">
                                    <input className="w-[150px] p-2 border rounded-2xl" type="number" placeholder="Descuento" />
                                    <span className="absolute right-8 top-2 text-gray-500">%</span>
                                </div>
                            </div>
                            <div>
                                <label className="block font-semibold mb-2">Incluir Desayuno</label>
                                <div className="flex space-x-4">
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="desayuno" value="si" />
                                        <span>Si</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="desayuno" value="no" />
                                        <span>No</span>
                                    </label>
                                </div>
                            </div>
                            <button
                                className="absolute right-0 bottom-0 px-6 py-2 text-white font-semibold rounded-2xl transition-all duration-300 bg-gradient-to-r from-[#087592] to-[#2393B0] hover:from-[#2393B0] hover:to-[#087592]"
                            >
                                Confirmar
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
