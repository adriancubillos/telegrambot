const express = require('express');
const dotenv = require('dotenv');

// Set path to .env file
dotenv.config({ path: './.env' });

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Essential for parsing JSON bodies

app.get('*', async (req, res) => {
  res.send('Hello GET');
});

app.post('*', async (req, res) => {
  res.send('Hello POST');
});

app.listen(PORT, (err) => {
  if (err) console.err(err);
  console.log(`Server listening on port ${PORT}`);
});
