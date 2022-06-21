import { useEffect, useState } from "react";
import { Container } from "../Container/Container";

import { Loading } from "../Loanding/Loading";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=47007f73f8047939723edd20cf8de68f&sort_by=popularity.desc&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
      });
  });

  return (
    <>
    {loading 
    ? 
    <Loading /> 
    : error ? 
    <div>ERROR</div> 
    : <Container movies = { {movies: movies, setMovies: setMovies}} />}
    </>
  );
}

export default App;
