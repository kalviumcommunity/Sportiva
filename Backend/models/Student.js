const mongoose = require("mongoose");
const { coachNotesSchema } = require("../models/coachNote");

const studentSchema = mongoose.Schema({
  image: String,
  name: String,
  belt_grade: String,
  years_of_exp: String,
  coach_notes: [coachNotesSchema],
});

const StudentModel = mongoose.model("student", studentSchema);

module.exports = { StudentModel };
