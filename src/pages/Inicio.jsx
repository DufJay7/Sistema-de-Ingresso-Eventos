import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [cadastrado, setCadastrado] = useState(false);
  const [transicionando, setTransicionando] = useState(false);

  function handleCadastro(event) {
    event.preventDefault();

    if (nome.trim() && email.trim() && senha.trim()) {
      setCadastrado(true);
    }
  }

  function irParaEventos() {
    setTransicionando(true);

    setTimeout(() => {
      window.location.href = '/eventos';
    }, 900);
  }

  return (
    <main className="inicio-page">

      {/*ANIMAÇÃO DE TRANSIÇÃO*/}

      {transicionando && (
        <div className="transicao-eventix">

          <div className="transicao-brilho"></div>

          <div className="transicao-logo">
            🎟️
          </div>

          <span>
            Eventix
          </span>

        </div>
      )}

      {/* ==========================================
          NAVBAR */}

      <nav className="inicio-navbar">

        <div className="inicio-logo">
          🎟️ <span>Eventix</span>
        </div>

      </nav>

      {/* ==========================================
          CONTEÚDO PRINCIPAL
      ========================================== */}

      <section className="inicio-hero">

        {/* ==========================================
            LADO ESQUERDO
        ========================================== */}

        <div className="inicio-content">

          <span className="inicio-tag">
            ✨ Seu próximo evento começa aqui
          </span>

          <h1>
            Viva experiências.
            <br />
            <span>Crie memórias.</span>
          </h1>

          <p>
            Descubra shows, festas, eventos e experiências
            incríveis. Encontre o evento perfeito para você.
          </p>

          {/* ESTATÍSTICAS */}

          <div className="inicio-stats">

            <div className="stat">
              <strong>+100</strong>
              <span>Eventos</span>
            </div>

            <div className="stat">
              <strong>🎵</strong>
              <span>Shows</span>
            </div>

            <div className="stat">
              <strong>🎉</strong>
              <span>Experiências</span>
            </div>

          </div>

          {/* PREVIEW DO INGRESSO */}

          <div className="ticket-preview">

            <div className="ticket-icon">
              🎫
            </div>

            <div>
              <strong>Seu próximo evento</strong>
              <span>está esperando por você</span>
            </div>

            <div className="ticket-arrow">
              →
            </div>

          </div>

        </div>

        {/* ==========================================
            CARD DE CADASTRO
        ========================================== */}

        <div className="cadastro-card">

          {!cadastrado ? (

            <>
              <h2>
                Crie sua conta
              </h2>

              <p>
                Cadastre-se gratuitamente e descubra
                novos eventos.
              </p>

              <form onSubmit={handleCadastro}>

                {/* NOME */}

                <div className="cadastro-campo">

                  <label>
                    Nome
                  </label>

                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    required
                  />

                </div>

                {/* E-MAIL */}

                <div className="cadastro-campo">

                  <label>
                    E-mail
                  </label>

                  <input
                    type="text"
                    placeholder="Digite qualquer e-mail"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />

                </div>

                {/* SENHA */}

                <div className="cadastro-campo">

                  <label>
                    Senha
                  </label>

                  <div className="senha-container">

                    <input
                      type={mostrarSenha ? 'text' : 'password'}
                      placeholder="Digite uma senha"
                      value={senha}
                      onChange={(event) => setSenha(event.target.value)}
                      required
                    />

                    <button
                      type="button"
                      className="senha-olho"
                      onClick={() =>
                        setMostrarSenha(!mostrarSenha)
                      }
                    >
                      {mostrarSenha ? '🙈' : '👁️'}
                    </button>

                  </div>

                </div>

                {/* BOTÃO DE CADASTRO */}

                <button
                  type="submit"
                  className="cadastro-button"
                >
                  Criar minha conta
                </button>

              </form>
            </>

          ) : (

            /* ==========================================
               APÓS O CADASTRO
            ========================================== */

            <div className="cadastro-sucesso">

              <div className="sucesso-icon">
                ✓
              </div>

              <h2>
                Tudo pronto!
              </h2>

              <p>
                Seja bem-vindo, <strong>{nome}</strong>!
              </p>

              {/* BOTÃO QUE INICIA A ANIMAÇÃO */}

              <button
                type="button"
                className="eventos-button"
                onClick={irParaEventos}
              >
                Ir para eventos 🎟️
              </button>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}

export default Inicio;