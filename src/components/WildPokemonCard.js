/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useHistory } from "react-router-dom";

const WildPokemonCard = ({ name }) => {
  const history = useHistory();

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
        padding: 0 12px;
        border-radius: 6px;
        box-shadow: 0px 11px 36px 8px rgba(214, 214, 214, 1);
      `}
    >
      <h4>{name}</h4>
      <h4>10</h4>
    </div>
  );
};

export default WildPokemonCard;
