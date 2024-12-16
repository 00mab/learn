const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  
// Middleware to handle requests
app.get('/', (req, res) => {
  res.send('Hello, World! This is the demo app running on port 80.');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
