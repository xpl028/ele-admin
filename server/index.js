const express = require("express");
const mongoose = require("mongoose");
const app = express();

// 跨域
app.use(require("cors")());
// 允许处理前端发来的json数据
app.use(express.json());

// 连接数据库
mongoose.connect("mongodb://localhost:27017/element-main", {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 数据库模型
const Article = mongoose.model(
  "Article",
  new mongoose.Schema({
    title: {
      type: String
    },
    content: {
      type: String
    }
  })
);

app.get("/", async (req, res) => {
  res.send("index");
});

// 新增文章
app.post("/api/articles", async (req, res) => {
  console.log(req);
  const article = await Article.create(req.body);

  res.send(article);
});

// 文章列表
app.get("/api/articles", async (req, res) => {
  const articles = await Article.find();

  res.send(articles);
});

// 删除文章
app.delete("/api/articles/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);

  res.send({
    stat: "ok"
  });
});

// 文章详情
app.get("/api/articles/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);

  res.send(article);
});

// 修改文章
app.put("/api/articles/:id", async (req, res) => {
  await Article.findByIdAndUpdate(req.params.id, req.body);

  res.send();
});

app.listen(3001, () => {
  console.log(`'http://localhost:3001/'`);
});