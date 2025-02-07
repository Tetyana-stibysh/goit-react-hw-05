import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastsMovie } from "../../services/movies-api";

const MovieCast = () => {
  const { id } = useParams();
  const [castMovie, setCastMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const toPoster = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const awaitWrapper = async () => {
      try {
        setLoading(true);
        const data = await fetchCastsMovie(id);
        setCastMovie(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    awaitWrapper();
  }, [id]);

  return (
    <div>
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      <ul>
        {castMovie.map((item) => (
          <li key={item.id}>
            <img
              src={
                item.profile_path
                  ? `${toPoster}${item.profile_path}`
                  : "../../../transparent-young-icon-boy-icon-avatar-icon-608ae2fe6a9dd1.7209974616197148144367.png"
              }
              alt={item.name}
              width="50"
              height="80"
            />
            <h3>{item.name}</h3>
            <p>Character: {item.character} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
