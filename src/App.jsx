import './App.css';
import { useEffect } from 'react';

import { HomePage } from './pages/HomePage';
import { GamePage } from './pages/GamePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export const App = () => {

  useEffect(() => {
    // Función para prevenir el menú contextual
    const preventContextMenu = (event) => {
      event.preventDefault();
    };

    // Añadir el listener para el evento contextmenu
    document.addEventListener('contextmenu', preventContextMenu);

    // Cleanup: remover el listener cuando el componente se desmonte
    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
    };
  }, []);

  return (
    <>
      <Router>


        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/game' element={<GamePage />} />
        </Routes>
      </Router>
    </>
  )
}
