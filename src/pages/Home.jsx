import React from 'react';
import Dropdown from '../components/home/Dropdown';
import ReservationCard from '../components/home/ReservationCard';
import CurrentReservationCard from '../components/home/CurrentReservationCard';
import {today, getLocalTimeZone} from "@internationalized/date";
import { Navbar } from '../components/general/Navbar';

export function Home () {
  
  let defaultDate = today(getLocalTimeZone());
  let [focusedDate, setFocusedDate] = React.useState(defaultDate);

  return (
    <div className="flex h-screen w-screen overflow-hidden">        
      <Navbar activePage="Pagina Principal" />
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top bar */}
        <header className="bg-white p-2 shadow-md flex justify-end">
          <div className="mr-14">
            <Dropdown />
          </div>
        </header>

        {/* Main content and right sidebar */}
        <div className="flex flex-1">
          <main className="flex-1 pt-8 pl-14 pr-14 pb-10 bg-[#F1F6FC] overflow-y-auto">
            {/* Your main content */}
            {/* Atajos */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex flex-col">
                <h1 className="text-2xl font-semibold text-[#087592] ml-2 mb-2">Atajos</h1>
                <div className="flex space-x-6">
                  <button className="px-4 py-2 bg-[#81D0DF] hover:bg-[#2393B0] text-white text-xs font-semibold rounded-2xl shadow-lg">
                    + AÑADIR RESERVA
                  </button>
                  <button className="px-4 py-2 bg-[#81D0DF] hover:bg-[#2393B0] text-white text-xs font-semibold rounded-2xl shadow-lg">
                    + CREAR ACTIVIDAD
                  </button>
                  <button className="px-4 py-2 bg-[#81D0DF] hover:bg-[#2393B0] text-white text-xs font-semibold rounded-2xl shadow-lg">
                    GESTIONAR PAGO
                  </button>
                </div>
              </div>
            </div>

            {/* Reservations */}
            <div className="pt-3">
              <h1 className="text-2xl font-semibold text-[#087592] ml-2">Mis Reservas</h1>
              <h2 className="text-gray-600 ml-2 mb-3 mt-3">Proximos Huespedes</h2>
              <div className="overflow-x-auto pb-4">
                <div className="carousel flex space-x-4 w-full">
                  <ReservationCard
                    name="Agustina Diaz"
                    dates="Feb 12 - Feb 14"
                    house="Casa 1"
                    payment="Pago Pendiente: $120"
                    status="Recordatorio de Pago"
                    statusColor="bg-[#1F3A93] text-white rounded-full px-4 py-2"
                    isPaid={false}
                  />
                  <ReservationCard
                    name="Miranda Martinez"
                    dates="Feb 12 - Feb 14"
                    house="Casa 2"
                    payment="$1000"
                    status="Pago Realizado"
                    statusColor="text-green-600"
                    isPaid={true}
                  />
                  <ReservationCard
                    name="Agustina Diaz"
                    dates="Feb 12 - Feb 14"
                    house="Casa 1"
                    payment="Pago Pendiente: $120"
                    status="Recordatorio de Pago"
                    statusColor="bg-[#1F3A93] text-white rounded-full px-4 py-2"
                    isPaid={false}
                  />
                  <ReservationCard
                    name="Miranda Martinez"
                    dates="Feb 12 - Feb 14"
                    house="Casa 2"
                    payment="$1000"
                    status="Pago Realizado"
                    statusColor="text-green-600"
                    isPaid={true}
                  />
                </div>
              </div>

              {/* Current Reservations */}
              <h2 className="text-gray-600 ml-2 mb-3 mt-3">Huespedes Actuales</h2>
              <div className="space-y-4">
                <CurrentReservationCard
                  name="Ramiro Martinez"
                  dates="Feb 12 - Feb 14"
                  house="Casa 2"
                  payment={150}
                  isPaid={true}
                />
                <CurrentReservationCard
                  name="Ramiro Martinez"
                  dates="Feb 12 - Feb 14"
                  house="Casa 2"
                  payment={150}
                  isPaid={false}
                />
                <CurrentReservationCard
                  name="Ramiro Martinez"
                  dates="Feb 12 - Feb 14"
                  house="Casa 2"
                  payment={150}
                  isPaid={true}
                />
                <CurrentReservationCard
                  name="Ramiro Martinez"
                  dates="Feb 12 - Feb 14"
                  house="Casa 2"
                  payment={150}
                  isPaid={false}
                />
              </div>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="w-80 pt-8 pr-10 bg-[#F1F6FC] sticky top-0 h-screen">
            <div className="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md w-[300px]">
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
