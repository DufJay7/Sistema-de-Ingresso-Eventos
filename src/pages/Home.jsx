import React from 'react';
import { useNavigate } from 'react-router-dom';
import { eventos } from '../data/ingresso';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Sistema de Ingressos</h1>
      <h2>Eventos Disponíveis</h2>

      <ul>
        {eventos.map((evento) => (
          <li key={evento.id}>
            <img src={evento.imagem} alt={evento.nome} width="200" />
            <h3>{evento.nome}</h3>
            <p>Local: {evento.local}</p>
            <p>Capacidade: {evento.capacidade}</p>
            <p>Preço: R$ {evento.preco.toFixed(2)}</p>
            <button onClick={() => navigate(`/detalhes/${evento.id}`)}>
              Ver detalhes e comprar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}