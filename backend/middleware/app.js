const express = require("express");
const errorController = require("../controller/errorController");

const app = express();
const authRouter = require("../router/auth");

app.use(express.json());
app.use("/api/user", authRouter);

app.use(errorController);

module.exports = app;
