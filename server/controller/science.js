const scienceService = require("../services/sciencesServices");
 
exports.getAllsciences = async (req, res) => {
  try {
    const sciences = await scienceService.getAllsciences();
    res.json({ data: sciences, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createScience  = async (req, res) => {
  try {
    const science = await scienceService.createScience (req.body);
    res.json({ data: science, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getScienceById = async (req, res) => {
  try {
    const science = await scienceService.getScienceById(req.params.id);
    res.json({ data: science, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateScience = async (req, res) => {
  try {
    const science = await scienceService.updateScience(req.params.id, req.body);
    res.json({ data: science, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteScience = async (req, res) => {
  try {
    const science = await scienceServic.deleteScience(req.params.id);
    res.json({ data: science, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
