import "./App.css";
import React, { useState, useEffect } from "react";
import { Router } from "./routes/Router";
import { ContextPokedex } from "./context/Context";
import { ContextPokemonList } from "./context/Context";
import axios from "axios";
import { BASE_URL } from "./components/url/urlBase";
import { getPokemonData } from "./components/functions/functionGet/getPokemonData";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [pokemonListPokedex, setPokemonListPokedex] = useState([]);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0)

  const itemsPerPage = 30

  const pagination = ({limit, total, offSet}) => {
    const currentPage = offSet ? offSet / limit + 1: 1;
    const totalPages = Math.ceil (total / limit)


  }
  


  const getPokemons = async () => {
    setLoading(true);
    try {
      const data  = await getPokemonData(itemsPerPage, itemsPerPage * page)
      console.log("lista pokemons", data)
      const newArrayPokemons = [];
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setTotalPages(Math.ceil(data.count / itemsPerPage))

      for (let pokemon of data.results) {
        const pokemonDetails = (await axios.get(`${BASE_URL}${pokemon.name}`)).data;
        newArrayPokemons.push(pokemonDetails);
      }
      setPokemonList(sortPokemons(newArrayPokemons))

    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemons();
  }, [page]);

   const sortPokemons = (array) =>{
     array.sort((a, b) => Number(a.id) > Number(b.id))
     return array 
   }

  return (
    <div>
     <ContextPokemonList.Provider
        value={[
          pokemonList,
          setPokemonList,
          loading,
          error,
          nextUrl,
          prevUrl,
          page,
          setPage,
          totalPages,
          setTotalPages,
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
