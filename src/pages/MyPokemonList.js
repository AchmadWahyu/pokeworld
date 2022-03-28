/** @jsxRuntime classic */
/** @jsx jsx */
import { useContext } from "react";
import { css, jsx } from "@emotion/react";
import { MdDelete } from "react-icons/md";
import { MyPokemonContext } from "../contexts/MyPokemonContext";
import Layout from "../Layout";
import MyPokemonCard from "../components/MyPokemonCard";

const MyPokemonList = () => {
  const { pokemon } = useContext(MyPokemonContext);

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
          <MyPokemonCard
            key={pokemon.nanoId}
            id={pokemon.nanoId}
            name={pokemon.name}
            nickName={pokemon.nickName}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MyPokemonList;
