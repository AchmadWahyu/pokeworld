import { nanoid } from "nanoid";
import React, { useState } from "react";

export const MyPokemonContext = React.createContext();

const MyPokemonContextProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);

  const addPokemon = (name, nickname) => {
    setPokemon([...pokemon, { name, nickname, nanoId: nanoid(5) }]);
  };

  const removePokemon = (id) => {
    setPokemon(pokemon.filter(pokemon.nanoId !== id));
  };

  return (
    <MyPokemonContext.Provider value={{ pokemon, addPokemon, removePokemon }}>
      {children}
    </MyPokemonContext.Provider>
  );
};

export default MyPokemonContextProvider;
