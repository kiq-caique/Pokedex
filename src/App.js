import React, { useEffect, useState } from "react";
import { getPokemon } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const result = await getPokemon();
      setPokemon(result);
      setLoading(false);
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
      <Pokedex pokemons={pokemon.results} loading={loading} />
    </div>
  );
}

export default App;
