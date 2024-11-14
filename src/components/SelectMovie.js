import React, { useContext } from "react";
import { movieList } from "../data";
import BsContext from "../Context/BsContext";
import "../CSS/SelectMovie.css";

const SelectMovie = () => {
  const context = useContext(BsContext);
  const { movie, changeMovie } = context;

  const handleChangeMovie = (value) => {
    changeMovie(value);
    window.localStorage.setItem("movie", value); 
  };

  return (
    <>
      <h1 className="SM_heading">Select a Movie :-</h1>
      <div className="SM_main_container">
        {movieList.map((el, index) => {
          return (
            <div
              key={index}
              className={`movie-box ${movie === el ? "selected" : ""}`} 
              onClick={() => handleChangeMovie(el)} 
            >
              {el}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SelectMovie;
