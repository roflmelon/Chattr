const router = require("express").Router();
const authenticate = require("../middleware/auth");
const user = require("../controllers/user");
const { getImage } = require("../controllers/file");

router.post("/users/register", user.registerStep1);
router.post("/users/register/confirm", user.registerStep2);
router.post("/users/login", user.login);
router.post("/users/change-pass", user.changePasswordStep1);
router.post("/users/change-pass/confirm", user.changePasswordStep2);

router.get("/users", authenticate, user.find);
router.get("/images/:image", getImage);

module.exports = router;
