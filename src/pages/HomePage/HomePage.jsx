import { useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { useState } from "react";
import { fetchTrending } from "../../services/movies-api";

const HomePage = () => {
  const [moviesTrLst, setMoviesTrLst] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const awaitWrapper = async () => {
      try {
        setLoading(true);
        const arr = await fetchTrending();
        setMoviesTrLst(arr.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    awaitWrapper();
  }, []);

  return (
    <div>
      <h1>Trending last week</h1>
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {moviesTrLst.length > 0 && <MovieList moviesArr={moviesTrLst} />}
    </div>
  );
};

export default HomePage;
