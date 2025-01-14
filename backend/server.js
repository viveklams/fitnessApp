const express = require("express");
const cors = require("cors");
const configureDb = require("./config/db");
const app = express();
const PORT = 3001;

configureDb();

app.use(express.json());
app.use(cors()); // Use the cors middleware

app.listen(PORT, () => {
  console.log("server runnin on port", PORT);
});
