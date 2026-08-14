import React from "react";
import equipe from "../data/equipe";

function InfoContato() {
  return (
    <section className="equipe-container">

      <div className="equipe-titulo">
        <h1>Nossa Equipe</h1>
        <p>
          Conheça os desenvolvedores responsáveis pelo projeto.
        </p>
      </div>

      <div className="equipe-cards">

        {equipe.map((pessoa, index) => (
          <div className="equipe-card" key={index}>

            <img
              src={pessoa.foto}
              alt={`Foto de ${pessoa.nome}`}
              className="equipe-foto"
            />

            <h2>{pessoa.nome}</h2>

            <p className="equipe-cargo">
              {pessoa.cargo}
            </p>

            <div className="equipe-links">

              {pessoa.linkedin && (
                <a
                  href={pessoa.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              )}

              {pessoa.github && (
                <a
                  href={pessoa.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}

            </div>

            <span className="equipe-email">
              {pessoa.email}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default InfoContato;