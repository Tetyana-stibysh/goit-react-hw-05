import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchByQuery } from "../../services/movies-api";
import s from "./MoviesPage.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  console.log(query);

  const getQuery = (searchedQuery) => {
    searchParams.set("query", searchedQuery);
    setSearchParams(searchParams);
    // setMoviesSearch([]);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const awaitWrapper = async () => {
      try {
        setLoading(true);
        const arr = await fetchByQuery(query);
        setMoviesSearch(arr.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    awaitWrapper();
  }, [query]);

  return (
    <div>
      <SearchBar getQuery={getQuery} query={query} />
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {moviesSearch.length > 0 && <MovieList moviesArr={moviesSearch} />}
    </div>
  );
};

export default MoviesPage;
