const express = require("express");
const app = express();

app.use(express.json());

// Route gốc
app.get("/", (req, res) => {
res.json({ message: "Tôi vừa sửa!", status: "ok" });});

// Route health check — CI/CD thường dùng cái này để kiểm tra app còn sống không
app.get("/health", (req, res) => {
  res.json({ status: "healthy", uptime: process.uptime() });
});

// Route tính tổng — để có logic thực tế cho việc test
app.get("/add/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Tham số phải là số" });
  }

  res.json({ result: a + b });
});

module.exports = app;
