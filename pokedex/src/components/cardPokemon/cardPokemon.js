import React from "react";
import "./style.css"
import { useNavigate } from "react-router-dom";
import { goToPokemonDetails } from "../../routes/Coordinator";

export const CardPokemon = (props) => {
  const navigate = useNavigate();

  return (
    <div className="card me-2 mb-2" style={{ width: "18rem" }}>
      <img
        src={props.pokemonList.sprites.front_default}
        className="card-img-top"
        alt="Imagem Pokemon"
      />
      <div className="card-body">
        <h5 className="card-title">{props.pokemonList.name}</h5>
      </div>
      <div className="card-body">
        <button
          className="btn btn-primary me-3"
          onClick={() => props.addToPokedex(props.pokemonList)}
        >
          Adicionar à Pokedex
        </button>
        <button
          className="btn btn-primary"
          onClick={() => goToPokemonDetails(navigate)}
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};
