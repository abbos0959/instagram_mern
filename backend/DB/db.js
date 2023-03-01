const mongoose = require("mongoose");

const DB = async () => {
   try {
      await mongoose.connect(process.env.URL);
      console.log("MONGODB ULANDI AKASI 😎 😎  ".bgBlue.bold.underline);
   } catch (error) {
      console.log(error, " 🤯 🤯 Nimadir Xato Ketdi Mongo Ulanmadi".bgRed.bold);
   }
};
module.exports = DB;
