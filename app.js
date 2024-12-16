const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Use the Amplify environment's PORT or fallback to 3000

// Middleware to handle requests
app.get('/', (req, res) => {
  res.send('Hello, World! This is the demo app running on port ' + port);
});

// Start the server and bind to all interfaces (0.0.0.0)
app.listen(port, '0.0.0.0', () => {
  console.log(`App listening on port ${port}`);
});
