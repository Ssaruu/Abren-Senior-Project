const express = require("express");
const mongoose = require("mongoose");
const bodyParer = require("body-parser");
const cors = require("cors");
const PORT = 5000;

const app = express();

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
