const express = require("express");
const app = express();

const PORT = 8001;

app.get("/", (req, res) => {
  return res.json({ message: "Success From Server in labs" });
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
