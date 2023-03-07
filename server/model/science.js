const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const scienceSchema = new Schema({
  title: String,
  body: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Science", scienceSchema);