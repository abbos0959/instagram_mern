require("dotenv").config();
const colors = require("colors");
const Db = require("./DB/db");
Db();

const app = require("./middleware/app");

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
   console.log(`server ishladi ${process.env.PORT}`.bgMagenta.bold);
});
