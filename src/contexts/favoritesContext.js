import React from "react";

const FavoriteContext = React.createContext({
  favoritePokemons: [],
  updateFavoritePokemons: (id) => null,
});

export const FavoritePorvider = FavoriteContext.Provider;

export default FavoriteContext;
