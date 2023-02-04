require("dotenv").config();
const mysql = require("mysql2");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

const connection = mysql.createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
});

// Fetch all users
router.get("/", (req, res) => {
   // const { name, email } = req.body;
   const query = "SELECT * FROM users";

   connection.query(query, (err, result) => {
      if (err) throw err;
      res.send({ message: "Successfully fetched all users", data: result });
   });
});

// Fetch user by id
router.get("/:id", (req, res) => {
   const { id } = req.params;
   const query = "SELECT * FROM users WHERE id = ?";

   connection.query(query, [id], (err, result) => {
      if (err) throw err;
      res.send({ message: "Successfully fetched user", data: result[0] });
   });
});

// Create user
router.post("/create-user", (req, res) => {
   const {
      first_name,
      last_name,
      address,
      post_code,
      contact_phone_number,
      email,
      username,
      password,
   } = req.body;
   const hashedPassword = bcrypt.hashSync(password, 10);
   const query =
      "INSERT INTO users(first_name, last_name, address, post_code, contact_phone_number, email, username, password) VALUES (?,?,?,?,?,?,?,?)";

   connection.query(
      query,
      [
         first_name,
         last_name,
         address,
         post_code,
         contact_phone_number,
         email,
         username,
         hashedPassword,
      ],
      (err, result) => {
         if (err) throw err;
         res.send({ message: "Successfully created user" });
      }
   );
});

// Update user
router.put("/:id", (req, res) => {
   const { id } = req.params;
   const {
      first_name,
      last_name,
      address,
      post_code,
      contact_phone_number,
      email,
      username,
      password,
   } = req.body;
   const hashedPassword = bcrypt.hashSync(password, 10);
   const query =
      "UPDATE users SET first_name = ?, last_name = ?, address = ?, post_code = ?, contact_phone_number = ?, email = ?, username = ?, password = ? WHERE id = ?";

   connection.query(
      query,
      [
         first_name,
         last_name,
         address,
         post_code,
         contact_phone_number,
         email,
         username,
         hashedPassword,
         id,
      ],
      (err, result) => {
         if (err) throw err;
         res.send({ message: "Successfully updated user" });
      }
   );
});

// Delete a user
router.delete("/:id", (req, res) => {
   const { id } = req.params;
   const query = "DELETE FROM users WHERE id = ?";

   connection.query(query, [id], (err, result) => {
      if (err) throw err;
      res.send({ message: "Successfully deleted user" });
   });
});

// Delete multiple users
router.post("/delete-multiple-users", (req, res) => {
   const { userIds } = req.body;
   const query = "DELETE FROM users WHERE id IN (?)";

   connection.query(query, [userIds], (err, result) => {
      if (err) throw err;
      res.send({ message: "Successfully deleted selected users " });
   });
});

module.exports = router;
