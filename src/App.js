import React, { Component } from "react";
import "./App.css";
import axios from "axios";
// IMPORT ALL COMPONENTS
import EntryForm from "./components/Form/EntryForm";
import Posts from "./components/Posts/Posts";
import Header from "./components/Header/Header";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
    this.deletePost = this.deletePost.bind(this);
    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  componentDidMount() {
    axios.get("/api/posts").then(res => {
      this.setState({
        posts: res.data
      });
    });
  }

  // this function will delete whatever elem is clicked via id
  deletePost(id) {
    axios.delete(`api/delete_post/${id}`).then(res => {
      this.setState({
        posts: res.data
      });
    });
  }

  // this function will add new posts to the page
  addPost(date, content) {
    axios.post("/api/add_post", { date, content }).then(res => {
      this.setState({
        posts: res.data
      });
    });
  }

  // this function will allow editing of posts
  editPost(id, content) {
    axios.put(`api/edit_post/${id}`, { content }).then(res => {
      this.setState({
        posts: res.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Posts
          editPost={this.editPost}
          deletePost={this.deletePost}
          posts={this.state.posts}
        />
        <EntryForm addPost={this.addPost} />
      </div>
    );
  }
}
