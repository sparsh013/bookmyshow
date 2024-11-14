import React, { useState, useEffect } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [time, changeTime] = useState("");
  const [movie, changeMovie] = useState("");
  const [noOfSeat, changeNoOfSeats] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    D1: "",
    D2: "",
  });
  const [lastBookingDetails, setLastBookingDetails] = useState(null);

  const handlePostBooking = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movie: movie, slot: time, seats: noOfSeat }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        setErrorPopup(true);
        setErrorMessage(errorData.message || "Failed to book seats.");
        console.error("Booking error:", errorData.message);
        return;
      }
  
      const data = await response.json();
      setErrorPopup(true);
      setErrorMessage(data.message);
      changeTime("");
      changeMovie("");
      changeNoOfSeats({
        A1: "",
        A2: "",
        A3: "",
        A4: "",
        D1: "",
        D2: "",
      });
      setLastBookingDetails(data.data);
      window.localStorage.clear();
    } catch (error) {
      console.error("Error posting booking:", error);
      setErrorPopup(true);
      setErrorMessage("Error connecting to the server. Please check the backend.");
    }
  };
  

  const handleGetLastBooking = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/booking`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch last booking details.");
      }

      const data = await response.json();
      console.log("Last booking data:", data);
      setLastBookingDetails(data.data);
    } catch (error) {
      console.error("Error fetching last booking:", error);
      setErrorPopup(true);
      setErrorMessage("Error fetching last booking.");
    }
  };

  useEffect(() => {
    const savedMovie = window.localStorage.getItem("movie");
    const savedSlot = window.localStorage.getItem("slot");
    const savedSeats = JSON.parse(window.localStorage.getItem("seats"));

    if (savedMovie) changeMovie(savedMovie);
    if (savedSlot) changeTime(savedSlot);
    if (savedSeats) changeNoOfSeats(savedSeats);
  }, []);

  return (
    <BsContext.Provider
      value={{
        handlePostBooking,
        handleGetLastBooking,
        movie,
        changeMovie,
        time,
        changeTime,
        noOfSeat,
        changeNoOfSeats,
        lastBookingDetails,
        errorPopup,
        setErrorPopup,
        errorMessage,
        setErrorMessage,
      }}
    >
      {props.children}
    </BsContext.Provider>
  );
};

export default BsState;
