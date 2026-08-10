import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';


function Erro () {
    return (
        <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>❌ <Evento></Evento> não encontrado!</h2>
        <Link to="/" className="btn-voltar">Voltar para a lista</Link>
      </div>
    );
}

export default Erro;