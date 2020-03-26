const express = require("express");
const posts = require("../db.json");

const app = express();
app.use(express.json());

const port = 4444;

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
