import React, { useState } from 'react';
import CardIngresso from '../components/CardIngresso';
import { eventos } from '../data/ingresso';

function Home() {
  const [busca, setBusca] = useState('');

  // Filtra os eventos pelo nome ou pelo local
  const eventosFiltrados = eventos.filter((evento) => {
    const termoBusca = busca.toLowerCase().trim();

    return (
      evento.nome.toLowerCase().includes(termoBusca) ||
      evento.local.toLowerCase().includes(termoBusca)
    );
  });

  return (
    <div className="home-container">

      {/* Banner Principal */}
      <section className="hero-section">
        <div className="hero-content">

          <h1>
            Encontre seu<br />
            <span className="text-highlight">próximo evento</span>
          </h1>

          <p>
            Os melhores shows, festivais e eventos estão aqui.
          </p>

          {/* Barra de Pesquisa */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar eventos..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />

            <button
              className="btn-search"
              type="button"
              aria-label="Pesquisar"
            >
              🔍
            </button>
          </div>

        </div>
      </section>

      {/* Conteúdo Principal */}
      <main className="main-content container">

        <div className="section-header">
          <h2>Todos os Eventos</h2>
        </div>

        {/* Lista de Eventos */}
        <div className="grid-ingressos">

          {eventosFiltrados.length > 0 ? (

            eventosFiltrados.map((evento) => (
              <CardIngresso
                key={evento.id}
                id={evento.id}
                nome={evento.nome}
                local={evento.local}
                preco={evento.preco}
                imagem={evento.imagem}
                data={evento.data}
                mes={evento.mes}
                categoria={evento.categoria}
              />
            ))

          ) : (

            /* Mensagem quando nenhum evento é encontrado */
            <div
              className="nao-encontrado-container"
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '3rem 1rem'
              }}
            >

              <span
                style={{
                  fontSize: '2.5rem',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}
              >
                ❌
              </span>

              <h3
                style={{
                  fontSize: '1.4rem',
                  color: '#ffffff',
                  marginBottom: '0.5rem'
                }}
              >
                Evento não encontrado
              </h3>

              <p style={{ color: '#a0a0b8' }}>
                Não encontramos nenhum evento para "{busca}".
                Verifique se digitou o nome corretamente.
              </p>

            </div>

          )}

        </div>

        {/* Rodapé Informativo */}
        <div className="features-footer">

          <div className="feature-item">
            <span className="feature-icon">🛡️</span>

            <div>
              <strong>Pagamento Seguro</strong>
              <p>Seus dados protegidos</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="feature-icon">🎟️</span>

            <div>
              <strong>Ingressos Digitais</strong>
              <p>Receba no seu e-mail</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="feature-icon">🎧</span>

            <div>
              <strong>Suporte 24h</strong>
              <p>Atendimento sempre disponível</p>
            </div>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Home;