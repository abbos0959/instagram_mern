const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const PostSchema = new mongoose.Schema(
   {
      title: { type: String },
      body: { type: String },
      photo: { type: String },
      likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
      comments: [
         { text: String, postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" } },
      ],
      saved: [
         {
            savedBy: { type: ObjectId, ref: "users" },
            postId: { type: ObjectId, ref: "posts" },
         },
      ],
      postedBy: {
         type: ObjectId,
         ref: "users",
      },
      pic: {
         type: String,
         ref: "users",
      },
   },
   { timestamps: true }
);

module.exports = mongoose.model("posts", PostSchema);
