import { lazy, Suspense } from "react";
import s from "./App.module.css";
import { Route, Routes } from "react-router-dom";
const Navigation = lazy(() => import("../Navigation/Navigation"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="reviews" element={<MovieReviews />} />
            <Route path="cast" element={<MovieCast />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
