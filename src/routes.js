import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cadastro from 'pages/Cadastro';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />} >
            <Route index element={<Inicio />} />
            <Route path='cadastro' element={<Cadastro />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}