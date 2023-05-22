const data = require("../../Sportiva/src/components/StudentsListingPage/Data.json");
const express = require("express");
const cors = require("cors");
const datapath = "../../Sportiva/src/components/StudentsListingPage/Data.json";
const fs = require("fs");
const { connection } = require("../Config/db");
const { StudentModel } = require("../models/schema");
const { userInfo } = require("os");
const { CoachNoteModel } = require("../models/coachNote.js");

const app = express();
const port = 4006;

// Enable CORS
app.use(cors());
app.use(express.json());

app.get("/api/Students", async(req, res) => {
   try {
    let result = await StudentModel.find({});
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while fetching students");
  }
});

app.get("/api/Students/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const student = await StudentModel.findOne({ id });
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occurred while fetching student" });
  }
});

app.post("/api/Students", async (req, res) => {
  console.log(req.body);
  const { image, name, belt_grade, years_of_exp, coach_notes } = req.body;
  const newStudent = { image, name, belt_grade, years_of_exp, coach_notes };
  console.log(newStudent);

  try {
    const student = await StudentModel.create(newStudent);
    console.log(student);

    res.send("Data stored successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});


app.post("/api/Students/:id/notes", async (req, res) => {
  const { id } = req.params;
  const { coach_id, date, note, skills } = req.body;
  const newSession = { coach_id, date, note, skills };

  try {
    const filter = { id };
    const update = { $push: { coach_notes: newSession } };
    const result = await StudentModel.findOneAndUpdate(filter, update, {
      new: true,
    });

    if (result) {
      res.send("Data stored successfully");
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});


app.listen(port, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (err) {
    console.log(err);
  }
  console.log(`Server is running on port ${port}`);
});
