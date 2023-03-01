  const mongoose = require("mongoose");

  const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        pic: { type: String },
        followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
        following: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
        stories: [
          {
              user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
              storyPic: String,
              storyDate: Date,
          },
        ],
        resetToken: String,
        resetTokenExpired: Date,
    },
    { timestamps: true }
  );

  module.exports = mongoose.model("users", UserSchema);
