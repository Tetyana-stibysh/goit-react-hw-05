import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";
const MovieList = ({ moviesArr }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {moviesArr.map((movie) => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={location}
              className={s.link}
            >
              <h3 className={s.movie}>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
