const express = require('express');
const app = express();
require("dotenv").config();

const data = ["lorem", "ipsum", "dolor", "sit", "amet"];


app.get("/words", (req, res) => {
  res.json(data);
});

const port = 3310;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log(`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}.`)