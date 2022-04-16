import React, { useContext } from "react";
import { CardPokedex } from "../../components/cardPokedex/CardPokedex";
import { StylePokedex } from "./style";
import { ContextPokedex } from "../../context/Context";

export const Pokedex = () => {
  const [pokemonListPokedex] = useContext(ContextPokedex);

  const cardPokedex = pokemonListPokedex.map((pokemon) => {
    return <CardPokedex key={pokemon.id} pokemon={pokemon} />;
  });

  return (
    <StylePokedex>
      <div className="contayner my-5 py-5">
        <div className="row">
          <div className="col-12 md-4 mb-5">
            <div className="row justify-content-center">{cardPokedex}</div>
          </div>
        </div>
      </div>
    </StylePokedex>
  );
};
