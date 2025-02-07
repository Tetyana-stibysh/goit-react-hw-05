import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/movies-api";

const MovieReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const awaitWrapper = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieReviews(id);
        setReviews(data.results);
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
      MovieReviews
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don`t have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
