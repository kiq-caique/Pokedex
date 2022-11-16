import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img alt={pokemon.name} src={pokemon.sprites.front_default} />
      </div>
      {pokemon.name}
    </div>
  );
};

export default Pokemon;
