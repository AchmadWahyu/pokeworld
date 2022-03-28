/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/react";
import WildPokemonCard from "../components/WildPokemonCard";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        if (!response) {
          window.alert("data kosong");
        } else {
          setPokemonList(response.data.results);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      All Pokemon List
      <div
        css={css`
          display: flex;
          flex-flow: column nowrap;
          gap: 12px;
          width: 300px;
          margin: 0 auto;
        `}
      >
        {pokemonList.map((pokemon) => (
          <WildPokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
