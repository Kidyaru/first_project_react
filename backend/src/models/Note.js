import mongoose from "mongoose";
// 1- create Schema
// 2- create model base of that schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Note = mongoose.model("Node", noteSchema)

export default Note