const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  return res.json({ message: "Success From Server in labs" });
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
