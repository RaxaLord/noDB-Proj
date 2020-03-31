const posts = require("../../db.json");

let num = 6;

module.exports = {
  getPosts: (req, res, next) => {
    res.status(200).send(posts);
  },

  addPost: (req, res, next) => {
    const newPost = {
      id: num,
      date: req.body.date,
      content: req.body.content
    };
    posts.push(newPost);
    num++;
    res.status(200).send(posts);
  },

  editPost: (req, res, next) => {
    const index = posts.findIndex(elem => {
      return +elem.id === +req.params.id;
    });
    posts[index].content = req.body.content;
    res.status(200).send(posts);
  },

  deletePost: (req, res, next) => {
    const index = posts.findIndex(elem => {
      return +elem.id === +req.params.id;
    });
    posts.splice(index, 1);
    res
      .status(200)
      .send(posts)
      .catch(400);
  }
};
