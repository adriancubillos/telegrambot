const express = require('express');
const dotenv = require('dotenv');

// Set path to .env file
dotenv.config({ path: './.env' });

// Set path to .env file
dotenv.config({ path: './.env' });
const app = express();

const PORT = process.env.PORT || 4040;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
