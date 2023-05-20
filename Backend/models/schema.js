const mongoose = require("mongoose");

const coachNotesSchema = mongoose.Schema({
  coach_id: String,
  date: String,
  note: String,
  skills: {
    speed: Number,
    footwork: Number,
    stamina: Number,
    flexibility: Number,
    agility: Number,
    reflex: Number,
  },
});

const studentSchema = mongoose.Schema({
  image: String,
  name: String,
  belt_grade: String,
  years_of_exp: String,
  coach_notes: [coachNotesSchema]
});



const StudentModel = mongoose.model("student", studentSchema);

module.exports = { StudentModel };
