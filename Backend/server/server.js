const data = require("../../Sportiva/src/components/StudentsListingPage/Data.json");
const express = require("express");
const cors = require("cors");
const datapath = "../../Sportiva/src/components/StudentsListingPage/Data.json";
const fs = require("fs");
const { connection } = require("../Config/db");
const { StudentModel } = require("../models/schema");
const { userInfo } = require("os");

const app = express();
const port = 4006;

// Enable CORS
app.use(cors());
app.use(express.json());

app.get("/api/Students", (req, res) => {
  res.json(data);
});

app.get("/api/Students/:id", async (req, res) => {
  const { id } = req.params;
  const filteredStudents = await data.find((student) => student.id === id);
  res.json(filteredStudents);
});

app.post("/api/Students", async(req, res) => {
  console.log(req.body);
  const {  image, name, belt_grade, years_of_exp, coach_notes } = req.body;
  const newStudent = {  image, name, belt_grade, years_of_exp, coach_notes };
  console.log(newStudent,typeof(id),typeof(coach_id))
  try{
  const data=new StudentModel(newStudent)
  await data.save();

  res.send('data stored successfully')
  }catch(e){
    console.log(e)
     res.send("something wrong");
  }
});

app.post("/api/Students/:id/notes", async(req, res) => {
  const { id } = req.params;
  const { coach_id, date, note, skills } = req.body;
  const newSession = { coach_id, date, note, skills  };
  const fw = data.find((student) => student.id === id);
  try{
  fw.coach_notes.push(newSession);
  const data = new StudentModel(newSession);
  await data.save();

  res.send('data stored successfully')
  }catch(e){
    console.log(e)
     res.send("something wrong");
  }
});

//   fw.coach_notes.push(newSession);
//   const _tempData = data.map((student) => {
//     if (student.id === id) {
//       return fw;
//     } else {
//       return student;
//     }
//   });

//   fs.writeFile(datapath, JSON.stringify(_tempData, null, 2), (err) => {
//     if (err) {
//       console.error("Error writing data.json", err);
//       return res.status(500).json({ message: "Internal server error" });
//     } else {
//       res.json({ message: "Student added sucessfully" });
//     }
//   });
// });

app.listen(port, async() => {
  try{
      await connection;
      console.log('connected to DB')
  }catch(err){
        console.log(err)
  }
  console.log(`Server is running on port ${port}`);
});


  // let studentdata = [];
  // try {
  //   studentdata = require(datapath);
  // } catch (err) {
  //   console.error("Error reading student data.json", err);
  //   return res.status(500).json({ message: "Internal server error" });
  // }
  // studentdata.push(newStudent);

  // fs.writeFile(datapath, JSON.stringify(studentdata, null, 2), (err) => {
  //   if (err) {
  //     console.error("Error writing data.json", err);
  //     return res.status(500).json({ message: "Internal server error" });
  //   } else {
  //     res.json({ message: "Student added sucessfully" });
  //   }
  // });

// app.put("/api/Students/:id/skills", (req, res) => {

//   const { id } = req.params;
//   const { coach_id,speed,footwork,stamina,flexibility,agility,reflex } = req.body;
//   const newUpdates = {speed,footwork,stamina,flexibility,agility,reflex,};

//   const student = data.find((student) => student.id.coach_notes.coach_id === id);

//   fw.coach_notes.skills.push(newUpdates);
//   const _tempData = data.map((student) => {

//       if (!student) {
//         return res.status(404).json({ message: "Student not found" });
//       }

//       student.coach_notes.forEach((note) => {
//         note.skills = { ...note.skills, ...skills };
//       });
//   })

//   fs.writeFile(datapath, JSON.stringify(_tempData, null, 2), (err) => {
//     if (err) {
//       console.error("Error writing data.json", err);
//       return res.status(500).json({ message: "Internal server error" });
//     } else {
//       res.json({ message: "Skills updated successfully" });
//     }
//   });
// });