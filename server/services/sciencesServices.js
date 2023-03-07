const ScienceModel = require("../model/science");

exports.getAllsciences = async () => {
  return await ScienceModel.find();
};
 

exports.createScience = async (science) => {
  return await ScienceModel.create(science);
};

exports.getScienceById = async (id) => {
  return await ScienceModel.findById(id);
};


exports.updateScience = async (id, science) => {
  return await ScienceModel.findByIdAndUpdate(id,science);
};
 

 exports.deleteScience = async (id) => {
  return await ScienceModel.findByIdAndDelete(id);
};