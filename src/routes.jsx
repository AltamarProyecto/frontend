import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Home } from './pages/Home.jsx'
import { CalendarPage } from './pages/CalendarPage';
import { GestionReserva } from './pages/GestionReservas';
import { PagosPage } from './pages/PagosPage';
import { AgendaActividades } from './pages/AgendaActividades';
  
  const publicRoutes = createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/calendario" element={<CalendarPage />} />
      <Route path="/gestion-reservas" element={<GestionReserva />} />
      <Route path="/pagos" element={<PagosPage />} />
      <Route path="/agenda-actividades" element={<AgendaActividades />} />
    </>,
  );
  const router = createBrowserRouter([...publicRoutes]);
  
  export default router;
  