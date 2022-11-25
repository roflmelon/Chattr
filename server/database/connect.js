const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const isDev = process.env.NODE_ENV === "development";
    const uri = isDev
      ? "mongodb://localhost:27017/messaging"
      : process.env.MONGO_URI;

    await mongoose.connect(uri);
    console.log("mongodb connected");
  } catch (error0) {
    console.log(error0.message);
  }
};
