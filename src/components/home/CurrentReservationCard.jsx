import React from 'react';

const CurrentReservationCard = ({ name, dates, house, payment, isPaid }) => {
  return (
    <div className="flex justify-between items-center pt-4 pb-4 pl-8 bg-white rounded-2xl shadow-lg mb-4">
      {/* Left section */}
      <div>
        <h3 className="font-semibold text-lg text-black mb-2">{name}</h3>
        <div
          className="px-5 py-1 rounded-md bg-[#81D0DF] text-white inline-block font-semibold mb-2"
          style={{ fontSize: '0.875rem' }}
        >
          {house}
        </div>
        <p className="text-sm text-gray-600">{dates}</p>
      </div>

      {/* Right section with centered content */}
      <div className="flex flex-col justify-center items-center w-1/3">
        <p className="text-xl font-bold text-black">${payment}</p>
        {isPaid ? (
          <p className="text-md text-green-600 font-semibold">Pago Realizado</p>
        ) : (
          <button className="px-4 py-2 mt-2 text-sm bg-[#087592] text-white rounded-full font-semibold hover:bg-[#065e70] transition">
            Recordatorio de Pago
          </button>
        )}
      </div>
    </div>
  );
};

export default CurrentReservationCard;
