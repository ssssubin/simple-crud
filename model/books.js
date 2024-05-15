const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const books = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
// 모델 생성
module.exports = mongoose.model("books", books);
