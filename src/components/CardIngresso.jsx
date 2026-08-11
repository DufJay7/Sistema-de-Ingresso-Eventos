import { link } from 'react-router-dom';

// Aqui são as informações, que vão aparecer no "Card" do evento, quando o usuário acessa a nossa página.
function CardIngresso({ id, nome, local, preco, imagem }) {
    <div className="card-ingresso" >
        <img src={imagem} alt={`Capa do Evento ${nome}`} className="card-image" />
        <h3 className="card-nome">
            {nome}
        </h3>
        <p className="card-detalhe">
            <strong>
                Local:
            </strong>
            {local}
        </p>
        <p className="card-detalhe">
            <strong>
                Preço:
            </strong>
            {preco}
        </p>

{/* Aqui vamos gerar o link de rota, que vai direcionar para o id do evento. */}
        <Link to={`/ingresso/${id}`} className="buttom-detalhes">
            Ver mais informações.
        </Link>
    </div>
}

export default CardIngresso;