import React, { useEffect, useContext, useState } from "react";
import "../CSS/LastBookingDetails.css"; 
import BsContext from "../Context/BsContext"; 
import { seats } from "../data"; 

const LastBookingDetails = () => {
  const context = useContext(BsContext);
  const { handleGetLastBooking, lastBookingDetails } = context;

  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    if (!isFetched) {
      handleGetLastBooking();
      setIsFetched(true); 
    }
  }, [isFetched, handleGetLastBooking]); 

  return (
    <div className="last_booking_details_container_main">
      <h2 className="last_booking_details_header">Last Booking Details:</h2>
      {lastBookingDetails ? (
        <>
          <div className="seats_container">
            <p className="seats_header">Seats:</p>
            <ul className="seats">
              {/* Check if lastBookingDetails.seats exists before rendering */}
              {seats.map((seat, index) => (
                <li className="seat_value" key={index}>
                  {/* Safely access the seat, only if lastBookingDetails.seats is defined */}
                  {seat}: {lastBookingDetails.seats ? Number(lastBookingDetails.seats[seat]) : "N/A"}
                </li>
              ))}
            </ul>
          </div>
          <p className="slot" style={{ textAlign: "left" }}>
            Slot: <span>{lastBookingDetails.slot}</span>
          </p>
          <p className="movie">
            Movie: <span>{lastBookingDetails.movie}</span>
          </p>
        </>
      ) : (
        <p className="no_previous_booking_msg">No Previous Booking Found!</p>
      )}
    </div>
  );
};

export default LastBookingDetails;
