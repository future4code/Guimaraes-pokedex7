import React, { useContext } from "react";
import { StyledHome } from "./style";
import { CardPokemon } from "../../components/cardPokemon/cardPokemon";
import { Spinner } from "../../components/spinner/Spinner";
import { ContextPokedex, ContextPokemonList } from "../../context/Context";


export const Home = () => {
  
  const [pokemonList, setPokemonList, loading, error] = useContext(ContextPokemonList);

  const [pokemonListPokedex, setPokemonListPokedex] = useContext(ContextPokedex);

  const addToPokedex = (newPokemon) => {
    const newListPokemon = [...pokemonListPokedex];
    newListPokemon.push(newPokemon);
    setPokemonListPokedex(newListPokemon)
    
    for(let i = 0; i < pokemonList.length; i ++){
      if (pokemonList[i] === newPokemon){
        pokemonList.splice(i, 1)
      }
    }
  }; 
   


  const cardPokemon =
    pokemonList &&
    pokemonList.map((pokemon, index) => {
      return (
        <CardPokemon
          key={index}
          image={pokemon.sprites.other.dream_world.front_default}
          name={pokemon.name}
          type={pokemon.types[0].type.name}
          pokemonList={pokemon}
          addToPokedex={addToPokedex}
        />
      );
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
        <div className="container-button ">
        <button className="btn btn-danger">Anterior</button>
          <button className="btn btn-danger">Próxima</button>
        </div>
      </div>
    </StyledHome>
  );
};
