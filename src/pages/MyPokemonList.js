/** @jsxRuntime classic */
/** @jsx jsx */
import { useContext, useState } from 'react';
import { css, jsx } from '@emotion/react';
import { Button } from '@mui/material';
import { FaBomb } from 'react-icons/fa';
import { MyPokemonContext } from '../contexts/MyPokemonContext';
import Layout from '../Layout';
import MyPokemonCard from '../components/MyPokemonCard';

const MyPokemonList = () => {
  let { pokemon } = useContext(MyPokemonContext);
  const [myPokemon, setMyPokemon] = useState(pokemon);

  const handleCrash = () => {
    setMyPokemon(2.4);
  };

  return (
    <Layout pageTitle="My Pokemon List">
      <div
        css={css`
          text-align: center;
          margin-bottom: 16px;
        `}
      >
        <Button onClick={handleCrash} color="error" variant="contained" endIcon={<FaBomb />}>
          Lets break the app!
        </Button>
      </div>
      <div
        css={css`
          display: flex;
          flex-flow: column nowrap;
          gap: 12px;
          width: 300px;
          margin: 0 auto;
          margin-bottom: 80px;
        `}
      >
        {myPokemon.map((pokemon) => (
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
