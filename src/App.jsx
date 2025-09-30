import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import CharactersPage from './pages/characters';
import CharacterPage from './pages/character';
import AboutPage from './pages/about'; // create if missing
import ContactPage from './pages/contact'; // create if missing

function App() {
  return (
    <Router>
      {/* simple navigation */}
      <nav style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
        <Link to="/characters" style={{ marginRight: 12 }}>Characters</Link>
        <Link to="/about" style={{ marginRight: 12 }}>About</Link>
        <Link to="/contact" style={{ marginRight: 12 }}>Contact</Link>
        {/* add other nav links if needed */}
      </nav>

      <Routes>
        {/* Ensure root and unknown routes resolve to the characters list */}
        <Route path="/" element={<Navigate to="/characters" replace />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/characters" replace />} />
        {/* ...existing routes... */}
      </Routes>
    </Router>
  );
}

export default App;
