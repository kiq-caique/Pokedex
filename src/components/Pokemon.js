import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <div> #{pokemon.id}</div>
          <h3> {pokemon.name} </h3>
        </div>
        <div className="card-botton">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-type-text">
                  {type.type}
                </div>
              );
            })}
          </div>
          <h3> {pokemon.name} </h3>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
