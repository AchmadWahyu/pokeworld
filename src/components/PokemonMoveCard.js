/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const PokemonMoveCard = ({ name }) => {
  return (
    <li
      css={css`
        list-style-type: none;
        margin: 8px 0;
        padding: 12px 8px;
        border: 1px solid #d9d9d9;
        border-radius: 12px;
      `}
    >
      {name}
    </li>
  );
};

export default PokemonMoveCard;
