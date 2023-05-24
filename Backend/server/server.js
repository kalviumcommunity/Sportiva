const express = require("express");
const axios = require("axios")
const cors = require("cors");
const { connection } = require("../Config/db");
const { StudentModel } = require("../models/Student");
const { userInfo } = require("os");
const multer = require("multer")
const FormData = require("form-data")
const upload = multer({storage : multer.memoryStorage()})
const { coachNotesSchema, CoachNoteModel } = require("../models/coachNote.js");


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
    const student = await StudentModel.findOne({ _id:id });
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (error) {
    console.error(error);
    // res.status(500).json({ message: "Error occurred while fetching student" });
    res.send(error)
  }
});

app.post("/api/Students", upload.single("image"), async (req, res) => {
const { name, belt_grade, years_of_exp } = req.body;
  const formData = new FormData();
  // formData.append("key", "ecacc87058e6a14e92023eaa1a1cd418"); // Replace with your ImgBB API key
  formData.append("image", req.file.buffer.toString("base64"));

  let imageUrl
  try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=ecacc87058e6a14e92023eaa1a1cd418",formData
      );
      imageUrl = response.data.data.url;
  } catch (error) {
    console.log(error.response.data)
  }

  const newStudent = {
    image: imageUrl, // Set the image property to the uploaded image URL
    name,
    belt_grade,
    years_of_exp,
  };

  try {
    const student = await StudentModel.create(newStudent);
    res.send("Data stored successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});


app.post("/api/Students/:id/notes", async (req, res) => {
  const { id } = req.params;
  const {  session, note, skills } = req.body;
  const newSession = {  session, note, skills };
  try {
    
      const student = await StudentModel.findOne({ _id: id });
      console.log(newSession)
      student.coach_notes.push(newSession);
      await student.save();
      res.send("Data stored successfully");
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
