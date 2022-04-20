import React, { useEffect, useState, useContext } from "react";
import { StylePokemonDetails } from "./style";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../components/url/urlBase";
import { Spinner } from "../../components/spinner/Spinner";
import { ContextPokedex} from "../../context/Context";

export const PokemonDetails = (name) => {

  const [pokemonListPokedex, setPokemonListPokedex] = useContext(ContextPokedex);
  const params = useParams(name);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [nomeBotao, setNomeBotao] = useState("Adicionar à Pokedex")
  const [estadoBotao, setEstadoBotao] = useState(false)
  const [classButton, setClassButton] = useState("btn btn-primary")


 
  useEffect(() => {
    const getPokemonDetails = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${BASE_URL}${params.name}`);
        setPokemonDetails([data]);
      } catch (err) {
        setError(err);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getPokemonDetails();
  }, []);

  const addToPokedexDetails= (newPokemon) => {
    const newListPokemon = [...pokemonListPokedex];
    newListPokemon.push(newPokemon);
    setPokemonListPokedex(newListPokemon)
    setEstadoBotao(!estadoBotao)
    {estadoBotao ? setNomeBotao("Adicionar à Pokedex") : setNomeBotao("Remover da Pokedex")}
    {estadoBotao ? setClassButton("btn btn-primary") :  setClassButton("btn btn-danger")}

  }

    const pokemonDetailsPage =
    pokemonDetails &&
    pokemonDetails.map((pokemon, index) => {
      return (
        <div className="container" key={index}>
          <div className="row align-items-start">
            <div className="topo">
              <h1>{pokemon.name} </h1>
              <div className="topo">
                <h3> Tipo: {pokemon.types[0].type.name} </h3>
              </div>
            </div>
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
                    <p>
                    <small>{pokemon.moves[4].move.name}</small>
                    </p>   
                  </div>
                </div>
              </div>
              <div className="container-button">
          <button className={classButton} onClick={()=> addToPokedexDetails(pokemonDetails[0]) }>{nomeBotao}</button>
        </div>

        </div>
      );
    });

  return (
    <StylePokemonDetails>
      <div className="container">
        {pokemonDetailsPage}
       
      </div>
    </StylePokemonDetails>
  );
};
