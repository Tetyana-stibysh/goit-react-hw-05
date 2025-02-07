import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchDetailsMovie } from "../../services/movies-api";
import clsx from "clsx";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieItem, setMovieItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const goBackUrl = useRef(location?.state ?? "/movies");
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  const toPoster = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    const awaitWrapper = async () => {
      try {
        setLoading(true);
        const item = await fetchDetailsMovie(`${id}`);
        setMovieItem(item);
        setGenres(item.genres);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    awaitWrapper();
  }, [id]);
  if (!movieItem) {
    return;
  }
  return (
    <div>
      <div>
        <Link to={goBackUrl.current}>Go back</Link>
      </div>

      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      <img
        src={`${toPoster}${movieItem.poster_path}`}
        alt={movieItem.tagline}
      />
      <div>
        <h2>{movieItem.title}</h2>
        <p>User Score: {`${movieItem.vote_average * 10}%`}</p>
        <h3>Overview</h3>
        <p>{movieItem.overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
      </div>

      <nav>
        <NavLink to="cast" className={buildLinkClass}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
        <Outlet />
      </nav>
    </div>
  );
};

export default MovieDetailsPage;
