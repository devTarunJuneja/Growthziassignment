// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home02 from './pages/Home02';
import ContactPage from './pages/contactpage';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      {/* If you’ll add more pages later, keep BrowserRouter & Routes in place */}
      <Routes>
        <Route path="/" element={<Home02 />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
