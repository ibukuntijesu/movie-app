import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import movies from "./movies";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return (
      <div className="details-page">
        <h1>Movie not found</h1>

        <button className="back-button" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="movie-details">
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="details-poster"
        />

        <div className="movie-info">
          <h1>{movie.title}</h1>

          <p className="rating">⭐ {movie.rating}/5</p>

          <p className="description">{movie.description}</p>

          <h2>Trailer</h2>

          <div className="trailer-container">
            <iframe
              src={movie.trailerLink}
              title={`${movie.title} trailer`}
              allowFullScreen
            ></iframe>
          </div>

          <button
            className="back-button"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;