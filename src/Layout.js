/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import {
  Alert,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Snackbar,
  TextField,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MdExplore } from "react-icons/md";
import { SiPocket } from "react-icons/si";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { MyPokemonContext } from "./contexts/MyPokemonContext";
import { ReactComponent as PokeBall } from "./icons/pokeball.svg";

const Layout = ({ children }) => {
  const { pokemon_name } = useParams();
  const { pokemon: myPokemon, addPokemon } = useContext(MyPokemonContext);

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

  const isAlreadyUsed = (name) => {
    return myPokemon.includes((pokemon) => pokemon.name === name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAlreadyUsed(nickName)) {
      window.alert("nama sudah digunakan!");
    } else {
      addPokemon(pokemon_name, nickName);
    }

    setIsCaught(false);
    setOpenAddNickName(false);
  };

  const { pathname } = useLocation();
  const [value, setValue] = useState(pathname);

  return (
    <Container maxWidth="sm">
      <div
        css={css`
          padding: 12px;
        `}
      >
        {children}
      </div>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Explore Pokemon"
            icon={
              <MdExplore
                css={css`
                  font-size: 40px;
                `}
              />
            }
            value="/"
            component={NavLink}
            to="/"
          />
          {pokemon_name ? (
            <BottomNavigationAction
              label="Throw PokeBall"
              css={css`
                &:disabled {
                  opacity: 0.3;
                }s
              `}
              icon={
                <PokeBall
                  css={css`
                    font-size: 40px;
                  `}
                />
              }
              disabled={isThrowingPokeball}
              onClick={handleClickCatchPokemon}
            />
          ) : null}
          <BottomNavigationAction
            label="My Pokemon"
            icon={
              <SiPocket
                css={css`
                  font-size: 40px;
                `}
              />
            }
            value="/my-pokemon"
            component={NavLink}
            to="/my-pokemon"
          />
        </BottomNavigation>
      </Paper>
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
      <Dialog keepMounted open={openAddNickName}>
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
              required
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit">Add Nickname</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Container>
  );
};

export default Layout;
