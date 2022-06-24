import { useContext, useEffect, useRef, useState } from "react";
import { FilterContext } from "../../Context/CineContext";
import { getRandomItem } from "../../Services/helpers";
import { discoverMovies } from "../../Services/Movies";
import { Card } from "../Card";
import { CardList } from "../CardList";
import { Filters } from "../Filters";
import { Header } from "../Header";

import { Loading } from "../Loanding";
import { Modal } from "../Modal";
import { MovieDetail } from "../MovieDetail";
import "./App.css";

function App() {
  const { valueInput, filter } = useContext(FilterContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [movieId, setMovieId] = useState(0);

  const headerMovie = useRef({});

  useEffect(() => {
    discoverMovies()
      .then((data) => {
        setMovies(data.results);
        headerMovie.current = getRandomItem(data.results);
      })
      .catch((error) => {
        new Error(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <div>Error</div>}

      {((movies.length > 0 && !loading) || !!valueInput) && (
        <>
          <Header
            movies={headerMovie}
            setOpenModal={setOpenModal}
            setMovieId={setMovieId}
            setMovies={setMovies}
          />
          <Filters />
          <CardList>
            {movies
              .filter(
                (movies) =>
                  movies.vote_average >= filter.min &&
                  movies.vote_average <= filter.max
              )
              .map((movie) => (
                <Card
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  image={movie.poster_path}
                  setOpenModal={setOpenModal}
                  setMovieId={setMovieId}
                />
              ))}
          </CardList>
          {openModal && (
            <Modal>
              <MovieDetail setOpenModal={setOpenModal} movieId={movieId} />
            </Modal>
          )}
        </>
      )}
    </>
  );
}

export default App;
