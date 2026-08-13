import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Inicio from './pages/Inicio';
import SobreNos from './pages/SobreNos';
import Contato from './pages/Contato';
import DetalhesIngresso from './components/DetalhesIngressocomp';
import Erro from './components/Erro';
import './index.css';

function App() {
  const [temaEscuro, setTemaEscuro] = useState(true);

  return (
    <div className={`app-container ${temaEscuro ? 'dark-theme' : 'light-theme'}`}>
      <Router>
        <header className="header">
          <div className="header-left">
            <Link to="/" className="logo">
              🎟️ <span className="logo-text">EVENTIX</span>
            </Link>
            <nav className="nav-links">
              <Link to="/">Início</Link>
              <Link to="/eventos">Eventos</Link>
              <Link to="/sobre">Sobre nós</Link>
              <Link to="/contato">Contato</Link>
            </nav>
          </div>

          <div className="header-right">
            <div className="header-search">
              <input type="text" placeholder="Buscar eventos..." />
              <span>🔍</span>
            </div>
            <button className="btn-user">👤</button>
            <button
              onClick={() => setTemaEscuro(!temaEscuro)}
              className="btn-tema-toggle"
              title="Alternar Tema"
            >
              {temaEscuro ? '☀️' : '🌙'}
            </button>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route path="/eventos" element={<Home />} />

          <Route path="/ingresso/:id" element={<DetalhesIngresso />} />

          <Route path="/sobre" element={<SobreNos />} />

          <Route path="/contato" element={<Contato />} />

          <Route path="*" element={<Erro />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;