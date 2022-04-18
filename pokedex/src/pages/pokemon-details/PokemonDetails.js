import React, { useContext } from "react";
import { StylePokemonDetails } from "./style";
import { ContextPokedex, ContextPokemonList } from "../../context/Context";

export const PokemonDetails = (name) => {

  const [pokemonList, setPokemonList, loading, error] = useContext(ContextPokemonList);

  const [pokemonListPokedex, setPokemonListPokedex] = useContext(ContextPokedex);
  
    const addToPokedexDetails = (newPokemon) => {
      const newListPokemon = [...pokemonListPokedex];
      newListPokemon.push(newPokemon);
      setPokemonListPokedex(newListPokemon)
      
      for(let i = 0; i < pokemonList.length; i ++){
        if (pokemonList[i] === newPokemon){
          pokemonList.splice(i, 1)
        }
      }
    };

  
  console.log("console pagina detalhes", pokemonList);
  
  console.log("depois da funcao lista pokedex", pokemonListPokedex,)
  console.log("depois da funcao lista pokemon", pokemonList)

  const pokemonDetailsPage = 
    pokemonList && pokemonList.map((pokemon)=>{
      return (
        <>
          <div className="container">
            <div className="row align-items-start">
              <div className="topo">
                <h1>{pokemon.name} </h1>
              </div>
            </div>
            <div className="topo">
              <h3> Tipo: {pokemon.types[0].type.name} </h3>
            </div>

            <div className="row align-items-center">
              <div className="col">
                <div className="card">
                  <img
                    className="image"
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt="Imagem Pokemon Frente"
                  />
                </div>
                <div className="card">
                  <img
                    src={pokemon.sprites.back_default}
                    
                    className="image-costas"
                    alt="Imagem Pokemon Costas"
                  />
                </div>
              </div>
              <div className="col">
                <div className="card-detalhes">
                
                  <h4>Poderes</h4>
                  <p>
                    Hp: <small>{pokemon.stats[0].base_stat}</small>{" "}
                  </p>
                  <p>
                    Attack: <small>{pokemon.stats[1].base_stat}</small>{" "}
                  </p>
                  <p>
                    Defense: <small>{pokemon.stats[2].base_stat}</small>{" "}
                  </p>
                  <p>
                    Special-attack: <small>{pokemon.stats[3].base_stat}</small>{" "}
                  </p>
                  <p>
                    Special-defense: <small>{pokemon.stats[4].base_stat}</small>{" "}
                  </p>
                  <p>
                  Speed: <small>{pokemon.stats[5].base_stat}</small>{" "}
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="card-detalhes">
                <h4>Principais Ataques</h4>
                  <p>
                  <small>{pokemon.moves[0].move.name}</small>
                  </p>
                  <p>
                  <small>{pokemon.moves[1].move.name}</small>
                  </p>
                  <p>
                  <small>{pokemon.moves[2].move.name}</small>
                  </p>
                  <p>
                  <small>{pokemon.moves[3].move.name}</small>
                  </p>    
                </div>
              </div>
            </div>
          </div>
          <div className="button">
            <button className="btn btn-primary" onClick={() => addToPokedexDetails(pokemonList)}>Add à Pokedex</button>
          </div>
        </>
      );
    }
    )


    
 
       
  return <StylePokemonDetails>
    {pokemonDetailsPage}

  </StylePokemonDetails>;
};
