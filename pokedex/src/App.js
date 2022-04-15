import "./App.css";
import React, { useState, useEffect } from "react";
import {Router} from "./routes/Router";
import { ContextPokedex } from "./context/Context";
import { ContextPokemonList } from "./context/Context";
import axios from "axios";
import { BASE_URL } from "./components/url/urlBase"

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const { data } =await axios.get(`${BASE_URL}?offset=20&limit=30`);
        const newArrayPokemons = [];

        for (let pokemon of data.results) {
          const pokemonDetails = (await axios.get(`${pokemon.url}`)).data;
          newArrayPokemons.push(pokemonDetails);
        }
        setPokemonList(newArrayPokemons);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      <ContextPokemonList.Provider value={[pokemonList, loading, error]}>
        <ContextPokedex.Provider>
        <Router/>
        </ContextPokedex.Provider>
      </ContextPokemonList.Provider>     
    </div>
  );
};

export default App;
