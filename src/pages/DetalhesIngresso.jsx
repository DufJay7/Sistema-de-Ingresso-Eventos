import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { eventos } from '../data/ingresso';

export default function DetalhesIngresso() {

  const { id } = useParams();
  const navigate = useNavigate();

  // Busca o evento pelo id do parâmetro da roota
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
    <div className="container detalhe-container">
      {/* Botão de voltar estilizado */}
      <button onClick={() => navigate('/')} className="btn-voltar-topo">
        ← Voltar para eventos
      </button>

      <div className="detalhe-grid">
        {/* Banner do Evento */}
        <div className="detalhe-midia">
          <img src={evento.imagem} alt={evento.nome} className="detalhe-img" />
        </div>

        {/* Informações e Compra */}
        <div className="detalhe-info">
          <span className="badge-categoria">SHOW</span>
          <h1 className="detalhe-titulo">{evento.nome}</h1>
          
          <div className="detalhe-meta">
            <p>📍 <strong>Local:</strong> {evento.local}</p>
            <p>👥 <strong>Capacidade:</strong> {evento.capacidade.toLocaleString('pt-BR')} pessoas</p>
            <p>🏷️ <strong>Preço unitário:</strong> R$ {evento.preco.toFixed(2).replace('.', ',')}</p>
          </div>

          <hr className="detalhe-divisor" />

          <div className="checkout-box">
            <h2>Selecione a quantidade de ingressos</h2>
            
            <div className="contador-container">
              <button onClick={() => alterarQuantidade(-1)} className="btn-qtd">-</button>
              <span className="qtd-numero"> {quantidade} </span>
              <button onClick={() => alterarQuantidade(1)} className="btn-qtd">+</button>
            </div>

            <hr className="detalhe-divisor" />

            <div className="total-box">
              <span>Total:</span>
              <h3 className="total-valor">R$ {total.toFixed(2).replace('.', ',')}</h3>
            </div>

            <button onClick={handleFinalizar} className="buttom-detalhes btn-comprar">
              Finalizar Compra
            </button>
          </div>

          {comprado && (
            <div className="modal-sucesso">
              <h3>🎉 Compra realizada com sucesso!</h3>
              <p>Você comprou {quantidade} ingresso(s) para {evento.nome}.</p>
              <button onClick={() => navigate('/')} className="btn-sucesso-voltar">
                Voltar para a lista de eventos
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}