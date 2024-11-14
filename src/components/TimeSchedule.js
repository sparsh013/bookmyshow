import React, { useContext } from "react";
import { slots } from "../data"; 
import "../CSS/TimeSchedule.css";
import BsContext from "../Context/BsContext";

const TimeSchedule = () => {
  const context = useContext(BsContext);

  const { time, changeTime } = context;

  const handleChangeTime = (value) => {
    changeTime(value);
    window.localStorage.setItem("slot", value); 
  };

  return (
    <>
      <div className="Slot_container">
        <h1 className="TS_heading">Select a Schedule :-</h1>
        <div className="TS_main_container">
          {slots.map((el, index) => {
            return (
              <div
                key={index}
                className={`time-slot-box ${time === el ? "selected" : ""}`} 
                onClick={() => handleChangeTime(el)} 
              >
                {el}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TimeSchedule;
