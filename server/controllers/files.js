const path = require("path");
const response = require("../helpers/response");

exports.getImage = async (req, res) => {
  try {
    res.sendFile(
      await path.resolve(__dirname, `../assets/images/${req.params.image}`)
    );
  } catch (error0) {
    response({
      success: false,
      res,
      statusCode: 400,
      message: error0.message,
    });
  }
};
Footer;
