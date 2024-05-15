const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bookRouter = require("./routes/book");

// .env 파일의 환경변수 사용하기 위함
require("dotenv").config();
const { MONGODB_PASSWORD } = process.env;

// JSON 형태의 요청 body를 파싱하기 위해
app.use(express.json());

app.use("/books", bookRouter);
// db 연결
mongoose.connect(
  `mongodb+srv://cdw3521:${MONGODB_PASSWORD}@book-test.lxcyamy.mongodb.net/test`
);
// DB 연결 EVENT 설정
mongoose.connection.on("connected", () => {
  console.log("DB에 연결되었습니다.");
});

app.get("/", (req, res) => {
  res.send("root page");
});

app.listen(3000);
