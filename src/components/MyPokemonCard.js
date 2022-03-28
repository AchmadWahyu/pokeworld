/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { MyPokemonContext } from "../contexts/MyPokemonContext";

const MyPokemonCard = ({ id, name, nickName }) => {
  const { removePokemon } = useContext(MyPokemonContext);

  const handleClickRemovePokemon = (id) => {
    removePokemon(id);
  };

  return (
    <div
      key={id}
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
        {name}
      </h4>
      <h4>{nickName}</h4>
      <button
        type="button"
        onClick={() => handleClickRemovePokemon()}
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
  );
};

export default MyPokemonCard;
