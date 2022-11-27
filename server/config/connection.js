const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/chattr',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
