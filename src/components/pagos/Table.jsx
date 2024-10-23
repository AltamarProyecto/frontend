import React from 'react';

export const TableComponent = () => {
  const data = [
    { fecha: '14:13 18/10/24', id_pago: 29, unidad: 'Casa 1', nombre: 'Ramiro Martinez', es_sena: 'No', metodo: 'Efectivo', monto: '$300' },
    { fecha: '22:45 17/10/24', id_pago: 28, unidad: 'Apto 4', nombre: 'Agustina Diaz', es_sena: 'No', metodo: 'Efectivo', monto: '$600' },
    { fecha: '14:13 18/10/24', id_pago: 27, unidad: 'Casa 2', nombre: 'Miranda Cabrera', es_sena: 'Sí', metodo: 'Transferencia', monto: '$300' },
    { fecha: '14:13 18/10/24', id_pago: 26, unidad: 'Apto 1', nombre: 'Ramiro Martinez', es_sena: 'Sí', metodo: 'Transferencia', monto: '$300' },
    { fecha: '14:13 18/10/24', id_pago: 25, unidad: 'Casa 1', nombre: 'Ramiro Martinez', es_sena: 'Sí', metodo: 'Transferencia', monto: '$500' },
    { fecha: '14:13 18/10/24', id_pago: 24, unidad: 'Apto 4', nombre: 'Agustina Diaz', es_sena: 'Sí', metodo: 'Transferencia', monto: '$300' },
    { fecha: '14:13 18/10/24', id_pago: 23, unidad: 'Casa 3', nombre: 'Ramiro Martinez', es_sena: 'Sí', metodo: 'Transferencia', monto: '$300' },
    { fecha: '14:13 18/10/24', id_pago: 22, unidad: 'Casa 3', nombre: 'Ramiro Martinez', es_sena: 'Sí', metodo: 'Transferencia', monto: '$300' },
  ];

  return (
    <div className="w-[1000px]">
      <table className="w-full bg-white rounded-2xl text-center">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b bg-[#087592] text-white rounded-tl-2xl">Fecha y Hora</th>
            <th className="px-4 py-2 border-b bg-[#087592] text-white">ID Pago</th>
            <th className="px-4 py-2 border-b bg-[#087592] text-white">Unidad</th>
            <th className="px-4 py-2 border-b bg-[#087592] text-white">Nombre Huésped</th>
            <th className="px-4 py-2 border-b bg-[#087592] text-white">Es Seña</th>
            <th className="px-4 py-2 border-b bg-[#087592] text-white">Método</th>
            <th className="px-4 py-2 border-b bg-[#087592] text-white rounded-tr-2xl">Monto Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
              <td className="px-4 py-2">{row.fecha}</td>
              <td className="px-4 py-2">{row.id_pago}</td>
              <td className="px-4 py-2">{row.unidad}</td>
              <td className="px-4 py-2">{row.nombre}</td>
              <td className="px-4 py-2">{row.es_sena}</td>
              <td className="px-4 py-2">{row.metodo}</td>
              <td className="px-4 py-2">{row.monto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

