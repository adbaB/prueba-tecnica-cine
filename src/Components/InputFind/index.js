import {useContext} from "react";
import { findMovies } from "../../Services/Movies";
import { FaSearch } from "react-icons/fa";
import { FilterContext } from "../../Context/CineContext";
import "./index.css";
export const InputFind = ({ setMovies }) => {
  const {valueInput,setValueInput} = useContext(FilterContext)
  const handlerInputChange = (e) => {
    setValueInput(e.target.value)
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
          value = {valueInput}
          onChange={handlerInputChange}
          placeholder="find Movie..."
        />
      </div>
    </div>
  );
};
