const express = require("express");
const app = express();
const port = 3000;

// Custom middleware
function addUser(req, res, next) {
  req.user = "Guest"; // Add new property to req object
  next(); // Pass control to the next middleware/route handler
}

// Route with middleware applied
app.get("/welcome", addUser, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
