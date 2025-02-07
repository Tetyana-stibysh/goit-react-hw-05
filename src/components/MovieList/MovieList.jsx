import { Link, useLocation } from "react-router-dom";

const MovieList = ({ moviesArr }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {moviesArr.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              <h3>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
