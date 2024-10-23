import React from 'react';
import { Navbar } from '../components/general/Navbar.jsx';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { TableComponent } from '../components/pagos/Table.jsx';

export function PagosPage() {
    return (
        <div className="flex">
            <Navbar activePage="Pagos" />
            <div className="p-10">
                {/* Buttons Section */}
                <div className="flex mb-6">
                    <button className="flex items-center justify-between px-6 py-2 bg-[#81D0DF] hover:bg-[#5db2c3] text-white font-semibold rounded-2xl shadow-lg">
                        Registrar Pago
                        <FaFileInvoiceDollar className="ml-2" />
                    </button>
                </div>
                <h1 className="text-2xl font-semibold text-[#087592] ml-2 mb-4">Historial de Pagos</h1>
                <TableComponent />
            </div>
        </div>
    )
}