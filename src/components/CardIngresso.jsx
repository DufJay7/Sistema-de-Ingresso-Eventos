import React from 'react';
import { Link } from 'react-router-dom'; // CORREÇÃO 1: 'Link' estava com 'l' minúsculo

// Aqui são as informações, que vão aparecer no "Card" do evento, quando o usuário acessa a nossa página.
function CardIngresso({ id, nome, local, preco, imagem, data, mes, categoria }) {
    return ( // CORREÇÃO 2: Adicionado o 'return' que estava faltando
        <div className="card-ingresso">
            
            <div className="card-image-wrapper">
                <img src={imagem} alt={`Capa do Evento ${nome}`} className="card-image" />
                {/* ALTERAÇÃO NOVA: Adicionado a data (dia e mes) igual ao do design Eventix */}
                {data && mes && (
                    <div className="card-badge-data">
                        <span className="badge-dia">{data}</span>
                        <span className="badge-mes">{mes}</span>
                    </div>
                )}
            </div>

            {/* ADICIONADO: Exibição da categoria recebida via props */}
            {categoria && (
                <span className="badge-categoria">
                    {categoria}
                </span>
            )}

            <h3 className="card-nome">
                {nome}
            </h3>
            
            <p className="card-detalhe">
                <strong>Local:</strong> {local}
            </p>
            
            <p className="card-detalhe">
                {/* ALTERAÇÃO NOVA: Formatação do preço */}
                <strong>Preço:</strong> R$ {preco ? preco.toFixed(2).replace('.', ',') : '0,00'}
            </p>

            {/* Aqui vamos gerar o link de rota, que vai direcionar para o id do evento. */}
            <Link to={`/ingresso/${id}`} className="buttom-detalhes">
                Ver detalhes
            </Link>
        </div>
    );
}

export default CardIngresso;