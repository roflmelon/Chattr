const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/chattr',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
console.log('MongoDB Connected');

module.exports = mongoose.connection;
