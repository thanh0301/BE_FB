const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const dotenv = require("dotenv");
const route  = require("./routes/user");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use('/api',route)

//database
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting to mongodb", err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}..`);
});
