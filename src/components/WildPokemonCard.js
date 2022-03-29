/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useContext } from "react";
import { SiPocket } from "react-icons/si";
import { useHistory } from "react-router-dom";
import { MyPokemonContext } from "../contexts/MyPokemonContext";
import Skeleton from "@mui/material/Skeleton";

const WildPokemonCard = ({ name }) => {
  const history = useHistory();
  const { pokemon } = useContext(MyPokemonContext);

  const countTotalCurrentOwnedPokemon = (name) => {
    const arrOwnedPokemon = pokemon.filter((p) => p.name === name);
    return arrOwnedPokemon.length;
  };

  const handlePokemonClick = (pokemonName) => {
    history.push(`/pokemon/${pokemonName}`);
  };

  return (
    <div
      onClick={() => handlePokemonClick(name)}
      css={css`
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        gap: 8px;
        padding: 0 12px;
        border-radius: 6px;
        box-shadow: 0px 11px 36px 8px rgba(214, 214, 214, 1);
        margin: 12px auto;
        width: 300px;

        &:hover {
          cursor: pointer;
        }
      `}
    >
      <h4
        css={css`
          flex-grow: 1;
        `}
      >
        {name}
      </h4>
      <SiPocket
        css={css`
          padding-top: 1em;
          padding-bottom: 1em;
          font-size: 1.2em;
        `}
      />
      <h4>{countTotalCurrentOwnedPokemon(name)}</h4>
    </div>
  );
};

export default WildPokemonCard;

export const WildPokemonCardSkeleton = () => {
  return (
    <Skeleton
      css={css`
        border-radius: 6px;
        margin: 12px auto;
      `}
      variant="rectangular"
      width={300}
      height={60}
    />
  );
};
