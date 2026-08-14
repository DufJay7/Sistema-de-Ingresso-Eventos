import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { eventos } from '../data/ingresso';

export default function DetalhesIngressocomp() {
  const { id } = useParams();
  const navigate = useNavigate();

  const evento = eventos.find(
    (item) => String(item.id) === String(id)
  );

  const [quantidade, setQuantidade] = useState(1);
  const [comprado, setComprado] = useState(false);

  if (!evento) {
    return (
      <div className="container">
        <h2>Evento não encontrado</h2>

        <button
          onClick={() => navigate('/eventos')}
          className="btn-voltar-topo"
        >
          ← Voltar para eventos
        </button>
      </div>
    );
  }

  // Aumentar quantidade
  const aumentarQuantidade = () => {
    setQuantidade((atual) => atual + 1);
  };

  // Diminuir quantidade
  const diminuirQuantidade = () => {
    setQuantidade((atual) => {
      if (atual <= 1) {
        return 1;
      }

      return atual - 1;
    });
  };

  // Preço unitário
  const precoUnitario = Number(evento.preco);

  // Cálculo do total
  const total = precoUnitario * quantidade;

  // Finalizar compra
  const handleFinalizar = () => {
    setComprado(true);
  };

  return (
    <div className="container detalhe-container">

      {/* Voltar para eventos */}
      <button
        onClick={() => navigate('/eventos')}
        className="btn-voltar-topo"
      >
        ← Voltar para eventos
      </button>

      <div className="detalhe-grid">

        {/* Imagem */}
        <div className="detalhe-midia">
          <img
            src={evento.imagem}
            alt={evento.nome}
            className="detalhe-img"
          />
        </div>

        {/* Informações */}
        <div className="detalhe-info">

          <span className="badge-categoria">
            {evento.categoria}
          </span>

          <h1 className="detalhe-titulo">
            {evento.nome}
          </h1>

          <div className="detalhe-meta">

            <p>
              📍 <strong>Local:</strong> {evento.local}
            </p>

            <p>
              📅 <strong>Data:</strong>{' '}
              {evento.data} {evento.mes}
            </p>

            <p>
              👥 <strong>Capacidade:</strong>{' '}
              {Number(evento.capacidade).toLocaleString('pt-BR')} pessoas
            </p>

            <p>
              🏷️ <strong>Preço unitário:</strong>{' '}
              R$ {precoUnitario.toFixed(2).replace('.', ',')}
            </p>

          </div>

          {/* Caixa de compra */}
          <div className="checkout-box">

            <h2>
              Selecione a quantidade de ingressos
            </h2>

            {/* Contador */}
            <div className="contador-container">

              <button
                type="button"
                onClick={diminuirQuantidade}
                className="btn-qtd"
              >
                -
              </button>

              <span className="qtd-numero">
                {quantidade}
              </span>

              <button
                type="button"
                onClick={aumentarQuantidade}
                className="btn-qtd"
              >
                +
              </button>

            </div>

            {/* TESTE DO CÁLCULO */}
            <div
              style={{
                marginTop: '15px',
                padding: '10px',
                borderRadius: '8px',
                background: '#1a1629',
                fontSize: '14px'
              }}
            >
              <p>
                Quantidade: <strong>{quantidade}</strong>
              </p>

              <p>
                Preço: <strong>
                  R$ {precoUnitario.toFixed(2).replace('.', ',')}
                </strong>
              </p>

              <p>
                Total calculado: <strong>
                  R$ {total.toFixed(2).replace('.', ',')}
                </strong>
              </p>
            </div>

            {/* Total */}
            <div className="total-box">

              <span>Total:</span>

              <h3 className="total-valor">
                R$ {total.toFixed(2).replace('.', ',')}
              </h3>

            </div>

            {/* Finalizar compra */}
            <button
              type="button"
              onClick={handleFinalizar}
              className="buttom-detalhes btn-comprar"
            >
              Finalizar Compra
            </button>

          </div>

          {/* Compra realizada */}
          {comprado && (
            <div className="modal-sucesso">

              <h3>
                🎉 Compra realizada com sucesso!
              </h3>

              <p>
                Você comprou {quantidade} ingresso(s) para{' '}
                <strong>{evento.nome}</strong>.
              </p>

              <button
                type="button"
                onClick={() => navigate('/eventos')}
                className="btn-sucesso-voltar"
              >
                Voltar para a lista de eventos
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}