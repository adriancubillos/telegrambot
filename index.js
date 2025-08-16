const express = require('express');
const dotenv = require('dotenv');

// Set path to .env file
dotenv.config({ path: './.env' });

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Essential for parsing JSON bodies

app.post('/{*path}', async (req, res) => {
  console.log(req.body);
  res.send('Hello POST');
});

app.get('/{*path}', async (req, res) => {
  res.send('Hello GET');
});

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`Server listening on port ${PORT}`);
});
