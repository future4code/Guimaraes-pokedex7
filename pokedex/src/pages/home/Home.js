import React, { useContext } from "react";
import { StyledHome } from "./style";
import { CardPokemon } from "../../components/cardPokemon/cardPokemon";
import { Spinner } from "../../components/spinner/Spinner";
import { ContextPokemonList } from "../../context/Context";

export const Home = () => {

  const[pokemonList, loading, error] = useContext(ContextPokemonList)


  const cardPokemon =
    pokemonList &&
    pokemonList.map((pokemon) => {
      return <CardPokemon key={pokemon.id} pokemonList={pokemon} />;
    });

  
  return (
    <StyledHome>
      <div className="contayner my-5 py-5">
        <div className="row">
          <div className="col-12 md-4 mb-5">
          {loading && <Spinner />}
            <div className="row justify-content-center">
            {!loading && error && <h1>Houve Um Erro na Requisição</h1>}
      {!loading && pokemonList && pokemonList.length > 0 && cardPokemon}
      {!loading && pokemonList && pokemonList.length === 0 && (
        <h1> Não Há Pokemons</h1>
      )}


            </div>

          </div>
        </div>
      </div>
    </StyledHome>
    
    
  );
};
