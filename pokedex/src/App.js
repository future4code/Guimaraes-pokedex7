import "./App.css";
import React, { useState, useEffect } from "react";
import { Router } from "./routes/Router";
import { ContextPokedex } from "./context/Context";
import { ContextPokemonList } from "./context/Context";
import axios from "axios";
import { BASE_URL } from "./components/url/urlBase";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [pokemonListPokedex, setPokemonListPokedex] = useState([]);
  const [url, setUrl] = useState(BASE_URL);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const getPokemons = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${BASE_URL}?limit=30`);
      const newArrayPokemons = [];
      setNextUrl(data.next);
      setPrevUrl(data.previous);

      for (let pokemon of data.results) {
        const pokemonDetails = (await axios.get(`${BASE_URL}${pokemon.name}`)).data;
        newArrayPokemons.push(pokemonDetails);
      }
   
      setPokemonList(newArrayPokemons.sort(()=> (a,b)=> a.id > b.id ? 1 : -1))
      
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemons();
  }, [url]);

  return (
    <div>
      <ContextPokemonList.Provider
        value={[
          pokemonList,
          setPokemonList,
          loading,
          error,
          setUrl,
          nextUrl,
          prevUrl,
        ]}
      >
        <ContextPokedex.Provider
          value={[pokemonListPokedex, setPokemonListPokedex]}
        >
          <Router />
        </ContextPokedex.Provider>
      </ContextPokemonList.Provider>
    </div>
  );
};

export default App;
