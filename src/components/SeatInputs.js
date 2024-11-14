import React from "react";
import "../CSS/SeatInputs.css";

const SeatInputs = ({
  changeNoOfSeats,
  noOfSeat,
  changeSeats,
  seat,
  text,
  index,
}) => {
  const change_seats = (e) => {
    changeNoOfSeats({ ...noOfSeat, [e.target.name]: Number(e.target.value) });

    window.localStorage.setItem(
      "seats",
      JSON.stringify({
        ...noOfSeat,
        [e.target.name]: Number(e.target.value),
      })
    );
  };

  const handleChecked = (text) => {
    changeSeats(text);
  };

  return (
    <div
      name={text}
      className={`form-check-label seats ${
        seat === text ? "active" : "inactive"
      }`}
      id={`${index}text`}
      onClick={() => {
        handleChecked(text, index);
      }}>
      <span className={"text"}>{text}</span>
      <input
        type="number"
        className="seats-input"
        placeholder="0"
        name={text}
        min="0"
        id={`${index}input`}
        max="30"
        onChange={change_seats}
        value={noOfSeat[text]}
      />
    </div>
  );
};

export default SeatInputs;