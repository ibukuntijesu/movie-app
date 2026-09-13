import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;