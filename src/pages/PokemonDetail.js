/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Snackbar,
  TextField,
} from "@mui/material";
import { ReactComponent as PokeBall } from "../icons/pokeball.svg";
import { MyPokemonContext } from "../contexts/MyPokemonContext";

const PokemonDetail = () => {
  const { pokemon_name } = useParams();
  const { pokemon: myPokemon, addPokemon } = useContext(MyPokemonContext);

  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`
        );
        if (!response) {
          window.alert("data kosong");
        } else {
          setPokemon(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [pokemon_name]);

  const [openAddNickName, setOpenAddNickName] = useState(false);
  const [nickName, setNickName] = useState("");
  const handleNicknameChange = (e) => {
    setNickName(e.target.value);
  };

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

  return (
    <React.Fragment>
      <Layout pageTitle={pokemon_name}>
        <div
          css={css`
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;

            h3 {
              margin-top: 0.5em;
            }
          `}
        >
          <h3
            css={css`
              text-transform: capitalize;
            `}
          >
            {pokemon.name}
          </h3>
          <h3>ID: {pokemon.id}</h3>
        </div>
        <div
          css={css`
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-evenly;
            padding: 24px 0;
          `}
        >
          <div>
            <img
              src={pokemon.sprites?.front_default}
              alt={pokemon.name}
              css={css`
                box-sizing: border-box;
                border: 2px solid black;
                width: 200px;
                height: 200px;
                object-fit: cover;
                border-radius: 50%;
              `}
            />
          </div>
          <div css={css``}>
            <p>Moves: </p>
            <ul
              css={css`
                max-height: 200px;
                overflow: scroll;
                padding-left: 1em;

                ::-webkit-scrollbar {
                  width: 0;
                  background: transparent;
                }
              `}
            >
              {pokemon.moves?.map((item) => (
                <li
                  key={item.move.url}
                  css={css`
                    list-style-type: none;
                    margin: 8px 0;
                    padding: 12px 8px;
                    border: 1px solid #d9d9d9;
                    border-radius: 12px;
                  `}
                >
                  {item.move.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div css={css``}>
          <p>Types: </p>
          <ul
            css={css`
              overflow: scroll;
              padding-left: 0;
              width: 100%;
              display: flex;
              flex-flow: row nowrap;

              ::-webkit-scrollbar {
                width: 0;
                background: transparent;
              }
            `}
          >
            {pokemon.types?.map((item) => (
              <li
                key={item.type.url}
                css={css`
                  list-style-type: none;
                  margin: 0 8px;
                  padding: 12px 8px;
                  border: 1px solid #d9d9d9;
                  border-radius: 20%;
                `}
              >
                {item.type.name}
              </li>
            ))}
          </ul>
        </div>
        <div
          css={css`
            text-align: center;
          `}
        >
          <IconButton
            onClick={handleClickCatchPokemon}
            disabled={isThrowingPokeball}
            aria-label="delete"
            size="large"
            css={css`
              margin: 0 auto;
              z-index: 99;
              position: relative;
              animation: Pokeball-logo-float infinite 3s ease-in-out;

              @keyframes Pokeball-logo-float {
                0% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(15px);
                }
                100% {
                  transform: translateY(0px);
                }
              }

              &:disabled {
                opacity: 0.3;
              }
            `}
          >
            <PokeBall
              css={css`
                height: 2.5em;
              `}
            />
          </IconButton>
        </div>
      </Layout>
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
    </React.Fragment>
  );
};

export default PokemonDetail;
