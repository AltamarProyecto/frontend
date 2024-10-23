import React from 'react';
import { Navbar } from '../components/general/Navbar.jsx';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormControlLabel, Switch } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import esLocale from '@fullcalendar/core/locales/es';

const unidades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export function CalendarPage() {
  const [age, setAge] = React.useState('');
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSwitchChange = (event) => {
    setIsSwitchOn(event.target.checked);
  };

  return (
    <div className="flex">
      <Navbar activePage="Calendario" />
      <div className="pl-8 pt-5">
        <div className="pl-8 pt-5 w-full flex items-center space-x-8">
          <button className="flex items-center justify-between px-6 py-2 bg-[#81D0DF] hover:bg-[#5db2c3] text-white text-sm rounded-2xl shadow-lg">
              APARTAMENTOS - PB
          </button>
          <button className="flex items-center justify-between px-6 py-2 bg-[#2393B0] hover:bg-[#307e91] text-white text-sm rounded-2xl shadow-lg">
              APARTAMENTOS - PA
          </button>
          <button className="flex items-center justify-between px-6 py-2 bg-[#81A1DF] hover:bg-[#5874ac] text-white text-sm rounded-2xl shadow-lg">
              CASAS
          </button>
        </div>
        <div className="absolute h-[700px] w-[1000px] rounded-lg bg-transparent ml-8 mt-8">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            locale={esLocale}
            initialView="dayGridMonth"
            events={[
              {
                title: 'Evento de 3 días',
                start: '2024-10-05', 
                end: '2024-10-08', 
              }              
            ]}
            eventColor="var(--color-primary)"
            displayEventTime={true}
            height="90%"
            headerToolbar={{
              left: 'prev next today',
              center: 'title',
              right: 'dayGridMonth timeGridWeek timeGridDay',
            }}
            dayHeaderClassNames="text-primary font-semibold"
            dayCellClassNames="text-primary" 
          />
        </div>
      </div>
    </div>
  );
}
