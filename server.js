const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const router = express.Router();
const routes = require("./routes")(router, process.env.NODE_ENV);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  