import React, { useEffect, useState } from "react";
import { getPokemon, getPokemonData } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";

function App() {
  const [page, setPage] = useState(0);
  const [TotalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState([]);

  const itensPerPage = 50;
  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const data = await getPokemon(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemon(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemon error", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex
        pokemons={pokemon}
        loading={loading}
        page={page}
        TotalPages={TotalPages}
      />
    </div>
  );
}

export default App;
