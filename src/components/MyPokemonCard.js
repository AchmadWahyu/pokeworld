/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { IconButton } from "@mui/material";
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
        align-items: center;
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
      <IconButton
        aria-label="remove-pokemon"
        size="large"
        onClick={() => handleClickRemovePokemon(id)}
      >
        <MdDelete />
      </IconButton>
    </div>
  );
};

export default MyPokemonCard;
