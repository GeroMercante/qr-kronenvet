import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Capacitaciones from './pages/Capacitaciones';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import OfertasMensuales from './pages/OfertasMensuales';
import OfertasSemanales from './pages/OfertasSemanales';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Error */}
        <Route excact path='*' element={<Error404 />} />
        {/* Pages */}
        <Route excact path='/' element={<Home />} />
        <Route excact path='/ofertas-semanales' element={<OfertasSemanales />} />
        <Route excact path='/ofertas-mensuales' element={<OfertasMensuales />} />
        <Route excact path='/capacitaciones' element={<Capacitaciones />} />
      </Routes>
    </Router>
  )
}

export default App;
