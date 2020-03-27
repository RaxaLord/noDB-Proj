import React, { Component } from "react";
import "./App.css";
import axios from "axios";
// IMPORT ALL COMPONENTS
import EntryForm from "./components/EntryForm";
import AllPost from "./components/AllPost";
import Header from "./components/Header";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
    this.deletePost = this.deletePost.bind(this);
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

  // this function will allow editing of the content
  editPost(id) {}

  render() {
    return (
      <div className="App">
        <Header />
        <AllPost deletePost={this.deletePost} posts={this.state.posts} />
        <EntryForm />
      </div>
    );
  }
}
