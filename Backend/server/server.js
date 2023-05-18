const data = require("../../Sportiva/src/components/StudentsListingPage/Data.json");
const express = require("express");
const cors = require("cors");
const datapath = "../../Sportiva/src/components/StudentsListingPage/Data.json";
const fs = require("fs")

const app = express();
const port = 4006;

// Enable CORS
app.use(cors());
app.use(express.json());

app.get("/api/Students", (req, res) => {
  res.json(data);
});

app.get("/api/Students/:id", async(req, res) => {
  const { id } = req.params;
  const filteredStudents = await data.find((student) => student.id === id);
  res.json(filteredStudents);
});



app.post("/api/Students/form", (req, res) => {
  console.log(req.body)
  const { id, image, name, belt_grade, years_of_exp, coach_notes } = req.body;
  const newStudent = { id, image, name, belt_grade, years_of_exp, coach_notes };

  let studentdata=[];
  try{
    studentdata = require(datapath)
  } catch (err) {
    console.error("Error reading student data.json" , err );
    return res.status(500).json({message:"Internal server error"})
  }
  studentdata.push(newStudent);
  
  fs.writeFile(datapath, JSON.stringify(studentdata, null, 2), (err) => {
    if (err) {
      console.error("Error writing data.json", err);
      return res.status(500).json({ message: "Internal server error" });
    } else {
      res.json({ message: "Student added sucessfully" });
    }
  });

});

app.post("/api/Students/studentAnalytics/modal", (req, res) => {
  console.log(req.body);
  const { coach_id , date , note , skills } = req.body;
  const newSession = { coach_id, date, note, skills };

  let sessiondata = [];
  try {
    sessiondata = require(datapath);
  } catch (err) {
    console.error("Error reading student data.json", err);
    return res.status(500).json({ message: "Internal server error" });
  }
  sessiondata.push(newSession);

  fs.writeFile(datapath, JSON.stringify(sessiondata, null, 2), (err) => {
    if (err) {
      console.error("Error writing data.json", err);
      return res.status(500).json({ message: "Internal server error" });
    } else {
      res.json({ message: "Student added sucessfully" });
    }
  });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
