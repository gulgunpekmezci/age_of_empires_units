import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Units from './pages/Units';
import UnitDetail from './pages/UnitDetail';
import Header from './components/Header/Header';
import './App.scss';
import './assets/style/variables.scss';

function App() {
  return (<>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="units" element={<Units />} />
        <Route path="detail" element={<UnitDetail />} />
      </Routes>
    </>
  );
}

export default App;
