import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Trailler from "./components/trailler/Trailler";
import Reviews from "./components/reviews/Reviews";
const App = () => {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);
  const getMovies = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/reviews/${movieId}`
      );

      const singleMovie = response.data;

      setMovie(singleMovie);

      setReviews(singleMovie.reviews);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="trailer/:ytTrailerId" element={<Trailler />} />
          <Route
            path="/Reviews/:movieId"
            element={
              <Reviews
                getMovieData={getMovieData}
                movie={movie}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
