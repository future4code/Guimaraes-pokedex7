import React, { useContext } from "react";
import { CardPokedex } from "../../components/cardPokedex/CardPokedex";
import { StylePokedex } from "./style";
import { ContextPokedex, ContextPokemonList } from "../../context/Context";

export const Pokedex = () => {
  const [pokemonList, setPokemonList, loading, error] =
    useContext(ContextPokemonList);
  const [pokemonListPokedex] = useContext(ContextPokedex);

  const RemoveToPokedex = (newPokemon) => {
    const newListPokemon = [...pokemonList];
    newListPokemon.unshift(newPokemon);
    setPokemonList(newListPokemon);
    for (let i = 0; i < pokemonListPokedex.length; i++) {
      if (pokemonListPokedex[i] === newPokemon) {
        pokemonListPokedex.splice(i, 1);
      }
    }
  };

  const cardPokedex = pokemonListPokedex.map((pokemon) => {
    return (
      <CardPokedex
        key={pokemon.id}
        pokemon={pokemon}
        removeToPokedex={RemoveToPokedex}
      />
    );
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
