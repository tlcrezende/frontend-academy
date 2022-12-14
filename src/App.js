import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Headers from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login/Login';


function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login/*' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
