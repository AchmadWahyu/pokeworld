/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/react";
import { MdDelete } from "react-icons/md";

const MyPokemonList = () => {
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
      My Pokemon List
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
            css={css`
              display: flex;
              flex-flow: row nowrap;
              justify-content: space-between;
              padding: 0 12px;
              border-radius: 6px;
              box-shadow: 0px 11px 36px 8px rgba(214, 214, 214, 1);
              gap: 12px;
            `}
          >
            <h4
              css={css`
                flex-grow: 1;
              `}
            >
              {pokemon.name}
            </h4>
            <h4>Boba</h4>
            <div>
              <MdDelete
                css={css`
                  padding-top: 1em;
                  padding-bottom: 1em;
                  font-size: 1.2em;
                `}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPokemonList;
