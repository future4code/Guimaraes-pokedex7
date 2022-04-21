import React, { useContext } from "react";
import { CardPokedex } from "../../components/cardPokedex/CardPokedex";
import { StylePokedex } from "./style";
import { ContextPokedex, ContextPokemonList } from "../../context/Context";
import { Spinner } from "../../components/spinner/Spinner";

export const Pokedex = () => {
  const [pokemonList, setPokemonList, loading, error] =
    useContext(ContextPokemonList);
  const [pokemonListPokedex] = useContext(ContextPokedex);

  const RemoveToPokedex = (newPokemon) => {
    const newListPokemon = [...pokemonList];
    newListPokemon.push(newPokemon);
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
        type={pokemon.types[0].type.name}
        removeToPokedex={RemoveToPokedex}
      />
    );
  });

  return (
    <StylePokedex>
    
      <div className="contayner my-5 py-5">
            {loading && <Spinner />}
        <div className="row">
          <div className="col-12 md-4 mb-5">
            <div className="row justify-content-center">
            {!loading && error && <h1>Houve Um Erro na Requisição</h1>}
            {!loading && pokemonListPokedex.length > 0 && cardPokedex}
            {!loading &&  pokemonListPokedex.length === 0 && (
                <h1> Não Há Pokemons</h1>)}
              </div>
          </div>
        </div>
      </div>
    </StylePokedex>
  );
};
