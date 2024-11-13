const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  movie: { type: String, required: true },
  slot: { type: String, required: true },
  seats: {
    A1: { type: Number, default: 0 }, // 0 means available, 1 means booked
    A2: { type: Number, default: 0 },
    A3: { type: Number, default: 0 },
    A4: { type: Number, default: 0 },
    D1: { type: Number, default: 0 },
    D2: { type: Number, default: 0 },
  },
});

const Ticket = mongoose.model('bookmovietickets', TicketSchema);
module.exports = Ticket;