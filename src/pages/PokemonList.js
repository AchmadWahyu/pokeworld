/** @jsxRuntime classic */
/** @jsx jsx */
import axios from "axios";
import { css, jsx } from "@emotion/react";
import WildPokemonCard, {
  WildPokemonCardSkeleton,
} from "../components/WildPokemonCard";
import Layout from "../Layout";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroller";

const arr = ["pokemon", "pokemon1", "pokemon2", "pokemon3"];

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
        <LoadingState />
      ) : isError ? (
        <b>Error while fetching data</b>
      ) : (
        <InfiniteScroll
          pageStart={0}
          loadMore={fetchNextPage}
          hasMore={hasNextPage}
          loader={<LoadingState />}
          css={css`
            display: flex;
            flex-flow: column nowrap;
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

const LoadingState = () => {
  return Array.from({ length: 5 }, (v, i) => i).map((index) => (
    <WildPokemonCardSkeleton key={index} />
  ));
};
