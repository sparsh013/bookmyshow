const express = require("express");
const cors = require("cors");
const connectDB = require("./dbConnection");
const Ticket = require("./schema"); 
const routes = require("./route"); 

require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 8080; 
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3000';

const connectWithRetry = async () => {
  try {
    await connectDB();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed, retrying in 5 seconds:", error);
    setTimeout(connectWithRetry, 5000); 
  }
};
connectWithRetry();


app.use(cors({
  origin: CORS_ORIGIN,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "An internal server error occurred." });
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
