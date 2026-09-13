import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import movies from "./movies";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return (
      <div className="details-container">
        <h1>Movie not found</h1>

        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="details-container">
      <button onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <h1>{movie.title}</h1>

      <img
        src={movie.posterURL}
        alt={movie.title}
        className="details-poster"
      />

      <p>{movie.description}</p>

      <h2>Movie Trailer</h2>

      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={`${movie.title} trailer`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MovieDetails;