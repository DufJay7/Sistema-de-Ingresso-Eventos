import equipe from "../data/InfoContatos";

function Contato() {
  return (
    <div className="contato">
      <h1>Entre em contato</h1>
      <p>Conheça a equipe por trás do EVENTIX</p>

      <div className="equipe">
        {equipe.map((membro) => (
          <div className="card-membro" key={membro.nome}>

            <img src={membro.foto} alt={membro.nome} />

            <h2>{membro.nome}</h2>

            <p>{membro.cargo}</p>

            <div className="links">
              <a href={membro.linkedin} target="_blank">
                LinkedIn
              </a>

              <a href={membro.github} target="_blank">
                GitHub
              </a>

              <a href={`mailto:${membro.email}`}>
                Email
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Contato;