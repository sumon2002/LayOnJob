const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");

// Database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log(err));

// Server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
