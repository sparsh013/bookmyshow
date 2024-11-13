const express = require("express");
const cors = require("cors");
const connectDB = require("./dbConnection");
const Ticket = require("./schema"); 
const routes = require("./route"); 

const app = express();
const PORT = 8080;


connectDB()
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection failed:", error));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.use("/api", routes); 

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
