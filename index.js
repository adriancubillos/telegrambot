require('dotenv').config(); // Set path to .env file

console.log(process.env);

const express = require('express');
const { handler } = require('./controller');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()); // Essential for parsing JSON bodies

app.post('/{*path}', async (req, res) => {
  console.log(req.body);
  // res.send('Hello POST');
  res.send(await handler(req, 'POST'));
});

app.get('/{*path}', async (req, res) => {
  res.send('Hello GET');
});

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`Server listening on port ${PORT}`);
});
