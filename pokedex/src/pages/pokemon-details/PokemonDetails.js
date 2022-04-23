import React, { useEffect, useState, useContext } from "react";
import { StylePokemonDetails } from "./style";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../components/url/urlBase";
import { Spinner } from "../../components/spinner/Spinner";
import { ContextPokedex, ContextPokemonList } from "../../context/Context";
import { Pokedex } from "../pokedex/Pokedex";

export const PokemonDetails = () => {
  const [pokemonListPokedex, setPokemonListPokedex] =
    useContext(ContextPokedex);
  const [
    pokemonList,
    setPokemonList,
    loading,
    error,
    setUrl,
    nextUrl,
    prevUrl,
  ] = useContext(ContextPokemonList);

  const params = useParams();
  const [pokemonDetails, setPokemonDetails] = useState();
  const [buttonName, setButtonName] = useState("Adicionar à Pokedex");
  const [stateButton, setStateButton] = useState(false);
  const [classButton, setClassButton] = useState("btn btn-primary");

  useEffect(() => {
    const getPokemonDetails = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}${params.name}`);
        setPokemonDetails(data);
      } catch (err) {
        console.log(error);
      }
    };
    getPokemonDetails();
  }, []);

  const addToPokedexDetails = (newPokemon) => {
    const newListPokemon = [...pokemonList];
    const index = pokemonListPokedex.findIndex((i) => i.id === newPokemon.id);
    if (index < 0) {
      if (
        window.confirm(
          `O ${newPokemon.name} não está na Pokedex, deseja adicioná-lo ?`
        )
      ) {
        setPokemonListPokedex([...pokemonListPokedex, newPokemon]);
        setStateButton(!stateButton);
        pokemonList.splice(newPokemon, 1);
        window.alert(`O ${newPokemon.name} Foi adicionado à Pokedex !!!`);
      }
    } else {
      if (
        window.confirm(`Deseja Remover o ${newPokemon.name} da Pokedex ?? `)
      ) {
        newListPokemon.push(newPokemon);
        setPokemonList(sortPokemons(newListPokemon))
        setPokemonListPokedex(pokemonListPokedex.filter((pokemon)=>pokemon.id !== newPokemon.id))
        window.alert(`O ${newPokemon.name} Foi Removido da Pokedex !!!`);
      }
    }
  };


  const sortPokemons = (array) =>{
    const newArray = array.sort((a, b) => Number(a.id) - Number(b.id))
    console.log(newArray.map((p)=> p.id))
    return newArray 
  }


  useEffect(() => {
    if (pokemonDetails) {
      const index = pokemonListPokedex.findIndex(
        (i) => i.id === pokemonDetails.id
      );
      if (index < 0) {
        setButtonName("Adicionar à Pokedex");
        setClassButton("btn btn-primary");
      } else {
        setClassButton("btn btn-danger");
        setButtonName("Remover da Pokedex");
      }
    }
  }, [pokemonDetails, pokemonListPokedex]);

  const pokemonDetailsPage = pokemonDetails && (
    <div className="container">
      <div className="row align-items-start">
        <div className="topo">
          <h1>{pokemonDetails.name} </h1>
          <div className="topo">
            <h3> Tipo: {pokemonDetails.types[0].type.name} </h3>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col">
          <div className="card">
            <img
              className="image"
              src={pokemonDetails.sprites.other.dream_world.front_default}
              alt="Imagem Pokemon Frente"
            />
          </div>
          <div className="card">
            <img
              src={pokemonDetails.sprites.back_default}
              className="image-costas"
              alt="Imagem Pokemon Costas"
            />
          </div>
        </div>
        <div className="col">
          <div className="card-detalhes">
            <h4>Poderes</h4>
            <p>
              Hp: <small>{pokemonDetails.stats[0].base_stat}</small>{" "}
            </p>
            <p>
              Attack: <small>{pokemonDetails.stats[1].base_stat}</small>{" "}
            </p>
            <p>
              Defense: <small>{pokemonDetails.stats[2].base_stat}</small>{" "}
            </p>
            <p>
              Special-attack: <small>{pokemonDetails.stats[3].base_stat}</small>{" "}
            </p>
            <p>
              Special-defense:{" "}
              <small>{pokemonDetails.stats[4].base_stat}</small>{" "}
            </p>
            <p>
              Speed: <small>{pokemonDetails.stats[5].base_stat}</small>{" "}
            </p>
          </div>
        </div>
        <div className="col">
          <div className="card-detalhes">
            <h4>Principais Ataques</h4>
            <p>
              <small>{pokemonDetails.moves[0].move.name}</small>
            </p>
            <p>
              <small>{pokemonDetails.moves[1].move.name}</small>
            </p>
            <p>
              <small>{pokemonDetails.moves[2].move.name}</small>
            </p>
            <p>
              <small>{pokemonDetails.moves[3].move.name}</small>
            </p>
            <p>
              <small>{pokemonDetails.moves[4].move.name}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <StylePokemonDetails>
      <div className="container">{pokemonDetailsPage}</div>
      <div className="container-button">
        <button
          className={classButton}
          onClick={() => addToPokedexDetails(pokemonDetails)}
        >
          {buttonName}
        </button>
      </div>
    </StylePokemonDetails>
  );
};
