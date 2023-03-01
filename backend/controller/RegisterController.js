const userModel = require("../models/User");
const catchErrorAsync = require("../utils/catchUtil");
const AppError = require("../utils/appError");
const jwtToken = require("../utils/jwtToken");

const Register = catchErrorAsync(async (req, res, next) => {
   const checkuser = await userModel.findOne({ email: req.body.email });
   if (checkuser) {
      return next(new AppError("bunday user allaqachon mavjud", 400));
   }
   const user = await userModel.create(req.body);
   jwtToken(user, 200, res);
});

module.exports = { Register };
