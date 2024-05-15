const router = require("express").Router();
const Books = require("../model/books");

// DB에 저장된 책 목록 가져오기(READ)
router.get("/", async (req, res) => {
  const bookList = await Books.find({}); // 전체 책 목록
  try {
    res.json(bookList);
  } catch (e) {
    res.status(500).json(err);
  }
});

// DB에 책 정보 삽입(CREATE)
router.post("/", async (req, res) => {
  const { title, content } = req.body;
  const book = await Books.create({ title, content });
  try {
    res.json(book);
  } catch (e) {
    res.status(500).json(err);
  }
});

// DB에 있는 책 정보 수정(PUT, _id 값 사용)
router.post("/:_id", async (req, res) => {
  const { _id } = req.params;
  const { title, content } = req.body;
  // _id 값과 일치하는 데이터 수정
  const book = await Books.updateOne({ _id }, { title, content });
  try {
    res.json(book);
  } catch (e) {
    res.status(500).json(err);
  }
});

// DB에 있는 책 정보 삭제(DELETE, _id 값 사용)
router.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  await Books.deleteOne({ _id });
  if (!_id) {
    // _id가 존재하지 않을 때
    res.status(500).json(err);
  }
  res.send("OK");
});

module.exports = router;
