const express = require("express");
const cors = require("cors");
const configureDb = require("./config/db");
const app = express();
const PORT = 3001;

//routes
const workoutRoutes = require("./routes/workoutRoutes");

configureDb();

app.use(express.json());
app.use(cors()); // Use the cors middleware

//route
app.use("/api", workoutRoutes);

app.listen(PORT, () => {
  console.log("server runnin on port", PORT);
});
