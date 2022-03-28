/** @jsxRuntime classic */
/** @jsx jsx */
import { useContext } from "react";
import { css, jsx } from "@emotion/react";
import { MdDelete } from "react-icons/md";
import { MyPokemonContext } from "../contexts/MyPokemonContext";
import Layout from "../Layout";

const MyPokemonList = () => {
  const { pokemon, removePokemon } = useContext(MyPokemonContext);

  const handleClickRemovePokemon = (id) => {
    removePokemon(id);
  };

  return (
    <Layout pageTitle="My Pokemon List">
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
            <button
              type="button"
              onClick={() => handleClickRemovePokemon(pokemon.nanoId)}
              css={css`
                background-color: #ffff;
                border: none;
              `}
            >
              <MdDelete
                css={css`
                  padding-top: 1em;
                  padding-bottom: 1em;
                  font-size: 1.2em;
                `}
              />
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default MyPokemonList;
