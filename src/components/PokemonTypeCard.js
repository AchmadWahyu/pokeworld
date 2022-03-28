/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const PokemonTypeCard = ({ name }) => {
  return (
    <li
      css={css`
        list-style-type: none;
        margin: 0 8px;
        padding: 12px 8px;
        border: 1px solid #d9d9d9;
        border-radius: 20%;
      `}
    >
      {name}
    </li>
  );
};

export default PokemonTypeCard;
