// routes.js

const express = require("express");
const router = express.Router();
const Ticket = require("./schema"); // Assuming you're using Mongoose models for DB operations

// Example POST route for booking a ticket
router.post("/booking", async (req, res) => {
  try {
    const newTicket = new Ticket(req.body);  // Create a new ticket
    await newTicket.save();  // Save ticket to DB
    res.status(200).json({ message: "Booking successful", data: newTicket });
  } catch (error) {
    res.status(500).json({ message: "Booking failed", error: error.message });
  }
});

// Example GET route to retrieve booking details
router.get("/booking", async (req, res) => {
  try {
    const bookings = await Ticket.find();  // Retrieve all bookings from DB
    res.status(200).json({ data: bookings });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve bookings", error: error.message });
  }
});

module.exports = router;
