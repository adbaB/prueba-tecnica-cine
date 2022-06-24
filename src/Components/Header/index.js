import React from "react";
import { getImageMovie } from "../../Services/Movies";
import { InputFind } from "../InputFind";
import "./index.css";
export const Header = ({ movies, setOpenModal, setMovieId,setMovies }) => {
  const { original_title, overview, poster_path, id } = movies.current;
  const handlerClick = () => {
    setOpenModal(true);
    setMovieId(id);
  };
  return (
    <div className="container_header">
      <nav className="navbar">
        <h1>CINE UNIVERSAL</h1>
        <InputFind setMovies={setMovies}/>
      </nav>
      <header className="header">
        <img
          className="image_header"
          src={getImageMovie(poster_path, "w500")}
          alt=""
        />
        <div className="text">
          <h3>{original_title}</h3>
          <p>{overview}</p>
          <button className="btn_header" onClick={handlerClick}>
            Ver más
          </button>
        </div>
      </header>
    </div>
  );
};
