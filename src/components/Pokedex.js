import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, loading, page, totalPages } = props;
  const onLeftClickhandler = () => {
    console.log("volta");
  };
  const onRightClickhandler = () => {
    console.log("avança");
  };
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickhandler}
          onRightClick={onRightClickhandler}
        />
      </div>
      {loading ? (
        <div>Carregando, segura ae Mestre...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return (
                <div>
                  <Pokemon key={index} pokemon={pokemon} />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
