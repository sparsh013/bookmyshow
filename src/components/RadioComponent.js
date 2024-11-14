import React from "react";

const RadioComponent = ({ text, changeSelection, data, value }) => {
  return (
    <div className="radio-container">
      <input
        type="radio"
        id={text} 
        name="movie" 
        value={value} 
        checked={data === value} 
        onChange={() => changeSelection(value)} 
      />
      <label htmlFor={text}>{text}</label>
    </div>
  );
};

export default RadioComponent;
