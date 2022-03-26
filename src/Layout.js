/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { MdExplore } from "react-icons/md";
import { SiPocket } from "react-icons/si";
import { useHistory } from "react-router-dom";
import { ReactComponent as PokeBall } from "./icons/pokeball.svg";

const Layout = ({ children }) => {
  let history = useHistory();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isCaught, setIsCaught] = useState(false);
  useEffect(() => {
    if (isCaught) {
      setOpenAddNickName(true);
    }
  }, [isCaught]);

  const [isThrowingPokeball, setIsThrowingPokeball] = useState(false);

  const handleClickCatchPokemon = () => {
    setIsThrowingPokeball(true);
    setTimeout(() => {
      const isPokemonCaught = Math.floor(Math.random() * 2);
      setIsCaught(isPokemonCaught === 1);
      setOpenSnackbar(true);
      setIsThrowingPokeball(false);
    }, 1000);
  };

  const [openAddNickName, setOpenAddNickName] = useState(false);
  const [nickName, setNickName] = useState("");
  const handleNicknameChange = (e) => {
    setNickName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("berhasil!, nama: ", nickName);
    setIsCaught(false);
    setOpenAddNickName(false);
  }

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <div
        css={css`
          padding: 12px;
        `}
      >
        {children}
      </div>
      <div
        css={css`
          position: fixed;
          bottom: 0;
          width: 100%;
          padding: 12px;
          display: flex;
          flex-flow: row nowrap;
          box-sizing: border-box;
          background-color: #ffff;
          box-shadow: 0px -8px 27px -11px rgba(133, 133, 133, 1);
          text-align: center;
        `}
      >
        <button
          type="button"
          css={css`
            flex-grow: 1;
            background-color: #ffff;
            border: none;
          `}
          onClick={() => history.push("/")}
        >
          <MdExplore
            css={css`
              font-size: 40px;
            `}
          />
          <span
            css={css`
              font-weight: bold;
              display: block;
            `}
          >
            Pokemon List
          </span>
        </button>
        <button
          type="button"
          disabled={isThrowingPokeball}
          css={css`
            flex-grow: 1;
            background-color: #ffff;
            border: none;

            &:disabled {
              opacity: 0.3;
            }
          `}
          onClick={handleClickCatchPokemon}
        >
          <PokeBall
            css={css`
              font-size: 40px;
            `}
          />
        </button>
        <button
          type="button"
          css={css`
            flex-grow: 1;
            background-color: #ffff;
            border: none;
          `}
          onClick={() => history.push("/my-pokemon")}
        >
          <SiPocket
            css={css`
              font-size: 40px;
            `}
          />
          <span
            css={css`
              font-weight: bold;
              display: block;
            `}
          >
            My Pokemon
          </span>
        </button>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={isCaught ? "success" : "warning"}
          sx={{ width: "100%" }}
        >
          {isCaught ? "Gotcha!" : "Miss!"}
        </Alert>
      </Snackbar>
      <Dialog open={openAddNickName} onClose={() => setOpenAddNickName(false)}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Caught Pokemon!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add nickname to your new Pokemon!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nickname"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleNicknameChange}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit">Add Nickname</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default Layout;
