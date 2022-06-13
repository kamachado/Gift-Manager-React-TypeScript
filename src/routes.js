import Menu from 'components/Menu';
import PagePattern from 'components/PatternPage';
import Registration from 'pages/registration';
import Home from 'pages/home';
import About from 'pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PagePattern />} >
            <Route index element={<Home />} />
            <Route path='registration' element={<Registration/>} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}