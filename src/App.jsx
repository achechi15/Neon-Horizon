import './App.css';
import { useContext, useEffect } from 'react';

import { UserContext } from './context/UserContext';
import { MobileControlls } from './components/MobileControlls';
import { Scene } from './components/Scene';
import { LosePage } from './components/LosePage';
import { HomePage } from './components/HomePage';
import { GamePage } from './components/GamePage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


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
