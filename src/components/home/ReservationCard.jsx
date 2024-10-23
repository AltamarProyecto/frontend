import React from 'react';

const ReservationCard = ({ name, dates, house, payment, status, statusColor, isPaid }) => {
  return (
    <div
      className={`w-60 flex-shrink-0 p-4 rounded-2xl shadow-lg  ${
        isPaid ? 'bg-white' : 'bg-[#81D0DF]'
      } text-center`}
    >
      <h3 className={`font-semibold text-lg mb-1 ${isPaid ? 'text-black' : 'text-white'}`}>{name}</h3>
      <span className={`block text-sm mb-3 ${isPaid ? 'text-gray-700' : 'text-white'}`}>{dates}</span>
      <div
        className={`px-5 py-1 rounded-md inline-block text-sm font-semibold mb-6 ${
          isPaid ? 'bg-[#81D0DF] text-white' : 'bg-white text-[#81D0DF]'
        }`}
        style={{ fontSize: '0.875rem' }} 
      >
        {house}
      </div>
      <p className={`text-sm font-medium mb-3 ${isPaid ? 'text-gray-900' : 'text-white'}`}>{payment}</p>
      
      {/* Conditionally render the payment reminder button */}
      {!isPaid && (
        <button className="px-4 py-2 text-sm bg-[#087592] text-white rounded-full font-semibold hover:bg-[#065e70] transition">
          Recordatorio de Pago
        </button>
      )}

      {/* Only show status if isPaid is true */}
      {isPaid && <p className={`text-sm font-semibold ${statusColor}`}>{status}</p>}
    </div>
  );
};

export default ReservationCard;
