const { Task } = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.json(allTasks);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const found = await Task.findById(req.params.id);
    if (!found) return res.status(404).json({ msg: `No document with id ${req.params.id}` });

    res.status(200).json(found);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const createTask = (req, res) => {
  const taskDocument = new Task(req.body);
  taskDocument.save((err) => {
    if (err) return res.status(404).json(err);
    // saved!
    res.status(201).json(taskDocument);
  });
};

const updateTask = async (req, res) => {
  try {
    const updatedDoc = await Task.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: 'after',
      runValidators: true,
    });
    if (!updatedDoc) return res.status(404).json({ msg: `No document with id ${req.params.id}` });

    res.json(updatedDoc);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deleteTask = async (req, res) => {
  try {
    const foundAndDeleted = await Task.findByIdAndDelete(req.params.id);
    if (!foundAndDeleted)
      return res.status(404).json({ msg: `No document with id ${req.params.id}` });

    res.json(foundAndDeleted);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
