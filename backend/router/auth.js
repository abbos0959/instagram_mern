const express = require("express");
const AuthController = require("../controller/RegisterController");

const router = express.Router();

router.route("/register").post(AuthController.Register);

module.exports = router;
