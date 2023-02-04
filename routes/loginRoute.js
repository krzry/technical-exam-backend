require("dotenv").config();
const mysql = require("mysql2");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const connection = mysql.createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
});

// Login endpoint
router.post("/", (req, res) => {
   const { username, password } = req.body;
   connection.query(
      "SELECT * FROM users WHERE username = ?",
      [username],
      (error, results) => {
         if (error)
            return res.status(500).send("Error connecting to the database");
         if (!results.length)
            return res.status(401).send("Username or password is incorrect");
         const user = results[0];
         if (!bcrypt.compareSync(password, user.password))
            return res.status(401).send("password is incorrect");
         const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
         });

         res.send({ token });
      }
   );
});

module.exports = router;
