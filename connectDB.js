// need this to read process.env
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {}, () => {
  console.log('Connected to database!');
});
