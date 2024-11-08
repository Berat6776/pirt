const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Basit bir API endpoint
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
