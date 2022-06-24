import React from "react";
import { findMovies } from "../../Services/Movies";
import { FaSearch } from "react-icons/fa";
import "./index.css";
export const InputFind = ({ setMovies }) => {
  const handlerInputChange = (e) => {
    findMovies(e.target.value).then((data) => setMovies(data.results));
  };
  return (
    <div className="input_container">

      <div className="inputGroup">
        <span>
          <FaSearch />
        </span>

        <input
          type="text"
          id="find"
          className="find"
          name="find"
          onChange={handlerInputChange}
          placeholder="find Movie..."
        />
      </div>
    </div>
  );
};
