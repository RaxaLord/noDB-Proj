const express = require("express");

const {
  getPosts,
  addPost,
  editPost,
  deletePost
} = require("./controller/controller");

const app = express();
app.use(express.json());

const port = 4444;

// GET/CREATE
app.get("/api/posts", getPosts);

// POST/READ
app.post("/api/add_post", addPost);

// PUT/UPDATE
app.put("/api/edit_post/:id", editPost);

// DELETE
app.delete("/api/delete_post/:id", deletePost);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
