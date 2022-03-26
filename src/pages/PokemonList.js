/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/react";
import { useHistory } from "react-router-dom";

const PokemonList = () => {
  const history = useHistory();

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

  const handlePokemonClick = (pokemonName) => {
    history.push(`/pokemon/${pokemonName}`);
  };

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
          <div
            key={pokemon.id}
            onClick={() => handlePokemonClick(pokemon.name)}
            css={css`
              display: flex;
              flex-flow: row nowrap;
              justify-content: space-between;
              padding: 0 12px;
              border-radius: 6px;
              box-shadow: 0px 11px 36px 8px rgba(214, 214, 214, 1);
            `}
          >
            <h4>{pokemon.name}</h4>
            <h4>10</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
