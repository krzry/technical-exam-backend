require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

const port = process.env.PORT || 8000;
app.listen(port, () => {
   console.log(`Server listening on port: ${port}`);
});

//Middleware
app.use(express.json()); // to recognize Request object as a JSON Object

//Routes
app.use("/users", userRoutes);
