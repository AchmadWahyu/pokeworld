/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/react";
import { MdDelete } from "react-icons/md";
import { MyPokemonContext } from "../contexts/MyPokemonContext";

const MyPokemonList = () => {
  const { pokemon } = useContext(MyPokemonContext);

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
        {pokemon.map((pokemon) => (
          <div
            key={pokemon.nanoId}
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
            <h4>{pokemon.nickName}</h4>
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
