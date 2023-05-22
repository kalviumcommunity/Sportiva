const mongoose = require("mongoose");

const coachNotesSchema = mongoose.Schema({
  session: String,
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

const CoachNoteModel = mongoose.model("coachNotes", coachNotesSchema);

module.exports = { CoachNoteModel, coachNotesSchema };
