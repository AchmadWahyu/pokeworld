/** @jsxRuntime classic */
/** @jsx jsx */
import axios from "axios";
import { css, jsx } from "@emotion/react";
import WildPokemonCard from "../components/WildPokemonCard";
import Layout from "../Layout";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroller";

const PokemonList = () => {
  const fetchPokemonList = async ({ pageParam = 1 }) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${
        (pageParam - 1) * 10
      }`
    );
    const { results, count } = response.data;

    return { results, nextPage: pageParam + 1, totalPages: count };
  };

  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery("pokemonList", fetchPokemonList, {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    });

  return (
    <Layout pageTitle="All Pokemon List">
      {isLoading ? (
        <i>loading...</i>
      ) : isError ? (
        <b>error</b>
      ) : (
        <InfiniteScroll
          pageStart={0}
          loadMore={fetchNextPage}
          hasMore={hasNextPage}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          css={css`
            display: flex;
            flex-flow: column nowrap;
            gap: 12px;
            width: 300px;
            margin: 0 auto;
            margin-bottom: 80px;
          `}
        >
          {data.pages.map((page) =>
            page.results.map((pokemon) => (
              <WildPokemonCard key={pokemon.name} name={pokemon.name} />
            ))
          )}
        </InfiniteScroll>
      )}
    </Layout>
  );
};

export default PokemonList;
