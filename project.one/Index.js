const express = require('express');
const app = express();
const port = 5000;

// JSON requests
app.use(express.json());

// API Route Example
app.get('project.one/Maps.js', (req, res) => {
  res.json({ message: 'Hello User!' });
});

// Start the server
app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});

const cors = require('cors');
app.use(cors());
