import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { eventos } from '../data/ingresso';

export default function DetalhesIngresso() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Busca o evento pelo id do parâmetro da rota
  const evento = eventos.find((item) => String(item.id) === String(id)) || eventos[0];

  const [quantidade, setQuantidade] = useState(1);
  const [comprado, setComprado] = useState(false);

  const alterarQuantidade = (delta) => {
    setQuantidade((prev) => Math.max(1, prev + delta));
  };

  const total = evento.preco * quantidade;

  const handleFinalizar = () => {
    setComprado(true);
  };

  return (
    <div>
      <button onClick={() => navigate('/')}>Voltar para Home</button>

      <h1>{evento.nome}</h1>
      <img src={evento.imagem} alt={evento.nome} width="300" />
      <p><strong>Local:</strong> {evento.local}</p>
      <p><strong>Capacidade:</strong> {evento.capacidade} pessoas</p>
      <p><strong>Preço unitário:</strong> R$ {evento.preco.toFixed(2)}</p>

      <hr />

      <h2>Selecione a quantidade de ingressos</h2>
      <div>
        <button onClick={() => alterarQuantidade(-1)}>-</button>
        <span> {quantidade} </span>
        <button onClick={() => alterarQuantidade(1)}>+</button>
      </div>

      <hr />

      <h3>Total: R$ {total.toFixed(2)}</h3>
      <button onClick={handleFinalizar}>
        Finalizar Compra
      </button>

      {comprado && (
        <div>
          <h3>Compra realizada com sucesso!</h3>
          <p>Você comprou {quantidade} ingresso(s) para {evento.nome}.</p>
          <button onClick={() => navigate('/')}>Voltar para a lista de eventos</button>
        </div>
      )}
    </div>
  );
}