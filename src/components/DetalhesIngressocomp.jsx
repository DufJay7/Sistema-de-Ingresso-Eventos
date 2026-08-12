import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { eventos } from '../data/ingresso';

function DetalhesIngresso() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantidade, setQuantidade] = useState(1);
  const [compraRealizada, setCompraRealizada] = useState(false);

  // Procura o evento pelo ID recebido na URL
  const evento = eventos.find(
    (evento) => String(evento.id) === String(id)
  );

  // Caso o evento não exista
  if (!evento) {
    return (
      <div className="container">
        <div
          style={{
            textAlign: 'center',
            padding: '4rem 1rem'
          }}
        >
          <h2>Evento não encontrado</h2>

          <p
            style={{
              color: 'var(--text-secondary)',
              marginTop: '1rem'
            }}
          >
            O evento que você está procurando não existe.
          </p>

          <button
            onClick={() => navigate('/')}
            style={{
              marginTop: '1.5rem',
              background: 'var(--primary)',
              color: '#ffffff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Voltar para eventos
          </button>
        </div>
      </div>
    );
  }

  // Calcula o valor total
  const total = evento.preco * quantidade;

  // Aumenta a quantidade
  const aumentarQuantidade = () => {
    setQuantidade((qtd) => qtd + 1);
  };

  // Diminui a quantidade
  const diminuirQuantidade = () => {
    setQuantidade((qtd) => {
      if (qtd > 1) {
        return qtd - 1;
      }

      return qtd;
    });
  };

  // Finaliza a compra
  const finalizarCompra = () => {
    setCompraRealizada(true);
  };

  return (
    <main className="container detalhe-container">

      {/* Botão para voltar */}
      <button
        className="btn-voltar-topo"
        onClick={() => navigate('/')}
      >
        ← Voltar para eventos
      </button>

      <div className="detalhe-grid">

        {/* Imagem do evento */}
        <div>
          <img
            className="detalhe-img"
            src={evento.imagem}
            alt={evento.nome}
          />
        </div>

        {/* Informações do evento */}
        <div>

          {/* Categoria */}
          <span className="badge-categoria">
            {evento.categoria}
          </span>

          {/* Nome do evento */}
          <h1 className="detalhe-titulo">
            {evento.nome}
          </h1>

          {/* Informações */}
          <div className="detalhe-meta">

            <p>
              <strong>📍 Local:</strong>{' '}
              {evento.local}
            </p>

            <p>
              <strong>📅 Data:</strong>{' '}
              {evento.data} {evento.mes}
            </p>

            <p>
              <strong>🎟️ Preço:</strong>{' '}
              R$ {Number(evento.preco).toFixed(2)}
            </p>

            <p>
              <strong>👥 Capacidade:</strong>{' '}
              {evento.capacidade || 'Informação não disponível'}
            </p>

          </div>

          {/* Caixa de compra */}
          <div className="checkout-box">

            <h2>
              Comprar ingressos
            </h2>

            {/* Quantidade */}
            <div className="contador-container">

              <button
                className="btn-qtd"
                onClick={diminuirQuantidade}
              >
                -
              </button>

              <span className="qtd-numero">
                {quantidade}
              </span>

              <button
                className="btn-qtd"
                onClick={aumentarQuantidade}
              >
                +
              </button>

            </div>

            {/* Total */}
            <div className="total-box">

              <span>
                Total
              </span>

              <strong className="total-valor">
                R$ {total.toFixed(2)}
              </strong>

            </div>

            {/* Botão comprar */}
            <button
              className="buttom-detalhes"
              onClick={finalizarCompra}
            >
              Comprar Ingresso
            </button>

          </div>

          {/* Mensagem de sucesso */}
          {compraRealizada && (
            <div className="modal-sucesso">

              <h3>
                Compra realizada! 🎉
              </h3>

              <p>
                Seu ingresso para <strong>{evento.nome}</strong> foi
                reservado com sucesso.
              </p>

              <button
                className="btn-sucesso-voltar"
                onClick={() => navigate('/')}
              >
                Voltar para eventos
              </button>

            </div>
          )}

        </div>

      </div>

    </main>
  );
}

export default DetalhesIngresso;