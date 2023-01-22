// connect to database
require('./connectDB');
const express = require('express');
const tasks = require('./routes/tasks');

const app = express();

// use statics, parse form-data, parse json
app.use(
  express.static('public'),
  express.urlencoded({ extended: false }),
  express.json(),
);

// tasks route
app.use('/api/v1/tasks', tasks);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Task Manager App started on port ${PORT}!`);
});
