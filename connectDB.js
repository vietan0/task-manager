// need this to read process.env
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {}, (err) => {
  if (err) console.log('Connecting to database failed!');
  console.log('Connected to database!');
});
