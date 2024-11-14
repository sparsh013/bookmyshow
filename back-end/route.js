const express = require("express");
const router = express.Router();
const Ticket = require("./schema"); 


router.post("/booking", async (req, res) => {
  try {
    const newTicket = new Ticket(req.body);  
    await newTicket.save();  
    res.status(200).json({ message: "Booking successful", data: newTicket });
  } catch (error) {
    res.status(500).json({ message: "Booking failed", error: error.message });
  }
});


router.get("/booking", async (req, res) => {
  try {
    const bookings = await Ticket.find();  
    res.status(200).json({ data: bookings });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve bookings", error: error.message });
  }
});

module.exports = router;
