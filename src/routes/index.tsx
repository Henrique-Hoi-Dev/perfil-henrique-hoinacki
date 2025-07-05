import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import Perfil from '../components/pages/Perfil';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
};
