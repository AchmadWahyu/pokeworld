import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";

export const MyPokemonContext = React.createContext();

const MyPokemonContextProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState(
    JSON.parse(localStorage.getItem("pokemon")) || []
  );
  useEffect(() => {
    localStorage.setItem("pokemon", JSON.stringify(pokemon));
  }, [pokemon]);

  const addPokemon = (name, nickName) => {
    setPokemon([...pokemon, { name, nickName, nanoId: nanoid(5) }]);
  };

  const removePokemon = (id) => {
    setPokemon(pokemon.filter((p) => p.nanoId !== id));
  };

  return (
    <MyPokemonContext.Provider value={{ pokemon, addPokemon, removePokemon }}>
      {children}
    </MyPokemonContext.Provider>
  );
};

export default MyPokemonContextProvider;
