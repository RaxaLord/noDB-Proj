import React, { Component } from "react";
import "./EntryForm.css";

export default class EntryForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <form>
          <input required className="date" type="date" min="2020-03-25" />
          <textarea
            required
            className="entry-text"
            placeholder="Start typing here..."
          />
          <button className="submit-btn">Post</button>
        </form>
      </div>
    );
  }
}
