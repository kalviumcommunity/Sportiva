const data = require('../../Sportiva/src/components/StudentsListingPage/Data.json')

const express = require("express");
const app = express();
const port = 4006;

app.get("/api/Students", (req, res) => {
  res.json(data);
});

app.get("/api/Students/:id", (req, res) => {
  const { id } = req.params;
  const filteredStudents = data.find((student) => student.id === id);
  res.json(filteredStudents);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

