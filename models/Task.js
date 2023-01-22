const { Schema, model } = require('mongoose');

const schemaTask = new Schema({
  name: {
    type: String,
    required: [ true, 'Where is your name?' ],
    trim: true,
    maxlength: [40, 'Name cannot be more than 40 characters'],
  },
  completed: { type: Boolean, default: false },
});

const Task = model('Task', schemaTask);

module.exports = { Task };
