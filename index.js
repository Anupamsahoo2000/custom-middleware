const express = require("express");
const app = express();
const port = 3000;

// // Custom middleware
// function addUser(req, res, next) {
//   req.user = "Guest"; // Add new property to req object
//   next(); // Pass control to the next middleware/route handler
// }

// // Route with middleware applied
// app.get("/welcome", addUser, (req, res) => {
//   res.send(`<h1>Welcome, ${req.user}!</h1>`);
// });

// Middleware to parse JSON body (needed for POST requests)
app.use(express.json());

// GET /orders
app.get("/orders", (req, res) => {
  res.send("Here is the list of all orders.");
});

// POST /orders
app.post("/orders", (req, res) => {
  res.send("A new order has been created.");
});

// GET /users
app.get("/users", (req, res) => {
  res.send("Here is the list of all users.");
});

// POST /users
app.post("/users", (req, res) => {
  res.send("A new user has been added.");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
