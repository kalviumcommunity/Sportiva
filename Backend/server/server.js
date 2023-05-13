const data = require('../../Sportiva/src/components/StudentsListingPage/Data.json')

const express = require("express");
const app = express();
const port = 4005;

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
