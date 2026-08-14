import React from "react";
import "./SobreNos.css";

function SobreNos() {
  return (
    <main className="sobre-container">

      {/* Cabeçalho da página */}
      <section className="sobre-hero">
        <span className="sobre-tag">SOBRE O PROJETO</span>

        <h1>
          Eventos que merecem
          <span> ser vividos.</span>
        </h1>

        <p>
          O Sistema de Ingressos para Eventos foi desenvolvido para
          proporcionar uma maneira simples, prática e organizada de
          encontrar eventos e adquirir ingressos.
        </p>
      </section>


      {/* Sobre o sistema */}
      <section className="sobre-introducao">

        <div className="sobre-texto">
          <span className="sobre-label">QUEM SOMOS</span>

          <h2>
            Uma plataforma pensada para
            <span> facilitar sua experiência.</span>
          </h2>

          <p>
            Nosso sistema foi criado com o objetivo de facilitar o acesso
            a eventos, reunindo informações importantes em um único lugar.
          </p>

          <p>
            Aqui, o usuário pode conhecer diferentes eventos, visualizar
            seus detalhes e encontrar uma forma mais simples de adquirir
            seus ingressos.
          </p>

          <p>
            A proposta é tornar todo esse processo mais organizado,
            intuitivo e agradável, desde a descoberta do evento até a
            compra do ingresso.
          </p>
        </div>

        <div className="sobre-destaque">
          <div className="destaque-icon">
            🎫
          </div>

          <h3>
            Seu evento.
            <br />
            Seu ingresso.
            <br />
            Sua experiência.
          </h3>

          <p>
            Encontre eventos, escolha seu ingresso e aproveite o momento.
          </p>
        </div>

      </section>


      {/* Nossa proposta */}
      <section className="sobre-proposta">

        <div className="sobre-titulo">
          <span className="sobre-label">NOSSA PROPOSTA</span>

          <h2>
            Tudo mais simples,
            <span> do seu jeito.</span>
          </h2>

          <p>
            Criamos uma experiência pensada para deixar a busca por
            eventos mais rápida e intuitiva.
          </p>
        </div>


        <div className="sobre-cards">

          <article className="sobre-card">
            <div className="card-icon">
              🔎
            </div>

            <h3>Encontre eventos</h3>

            <p>
              Descubra eventos disponíveis e encontre opções que
              combinam com o que você procura.
            </p>
          </article>


          <article className="sobre-card">
            <div className="card-icon">
              🎟️
            </div>

            <h3>Escolha seu ingresso</h3>

            <p>
              Consulte as informações do evento e escolha a opção
              de ingresso que deseja adquirir.
            </p>
          </article>


          <article className="sobre-card">
            <div className="card-icon">
              ⚡
            </div>

            <h3>Tenha praticidade</h3>

            <p>
              Uma experiência simples e organizada para que você
              possa aproveitar o que realmente importa.
            </p>
          </article>

        </div>

      </section>


      {/* Tecnologias / projeto */}
      <section className="sobre-projeto">

        <div className="projeto-conteudo">

          <span className="sobre-label">
            DESENVOLVIMENTO
          </span>

          <h2>
            Um projeto desenvolvido
            <span> com tecnologia.</span>
          </h2>

          <p>
            O Sistema de Ingressos para Eventos foi desenvolvido
            utilizando React.js, buscando aplicar conceitos de
            desenvolvimento de interfaces modernas, componentes
            reutilizáveis e organização de código.
          </p>

          <div className="tecnologias">

            <span className="react">React.js</span>
            <span className="javascript">JavaScript</span>
            <span className="jsx">JSX</span>
            <span className="css">CSS</span>
            <span className="vite">Vite</span>

          </div>

        </div>

      </section>


      {/* Chamada final */}
      <section className="sobre-final">

        <span className="sobre-label">
          PRONTO PARA COMEÇAR?
        </span>

        <h2>
          Encontre seu próximo
          <span> evento.</span>
        </h2>

        <p>
          Explore os eventos disponíveis e escolha sua próxima
          experiência.
        </p>

        <a href="./eventos" className="sobre-button">
          Ver eventos
          <span>→</span>
        </a>

      </section>

    </main>
  );
}


export default SobreNos;