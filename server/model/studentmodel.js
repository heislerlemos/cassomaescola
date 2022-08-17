const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
    turma: {
    type: String,
    required: true ,
  },
});

const Student  = mongoose.model("Student", StudentSchema);

module.exports = Student; 