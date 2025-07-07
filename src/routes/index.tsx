import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import Perfil from '../components/pages/Perfil';
import Curriculo from '../components/pages/Curriculo';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/curriculo" element={<Curriculo />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
