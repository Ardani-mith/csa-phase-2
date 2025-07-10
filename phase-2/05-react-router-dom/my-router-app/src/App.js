// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'

// Komponen Halaman
const HomePage = () => <h2 className='halaman-text'>Ini Halaman Utama</h2>;
const AboutPage = () => <h2>Tentang Kami</h2>;
const ContactPage = () => <h2>Hubungi Kami</h2>;

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Opsional: Halaman 404 */}
        <Route path="*" element={<h2>Halaman Tidak Ditemukan!</h2>} />
      </Routes>
    </Router>
  );
}

export default App;