import React, { Component } from "react";
import "./EntryForm.css";

export default class EntryForm extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      date: ""
    };
  }

  render(props) {
    const { date, content } = this.state;
    return (
      <div>
        <form>
          <input
            required
            className="date"
            type="date"
            value={this.state.date}
            onChange={e => {
              this.setState({
                date: e.target.value
              });
            }}
          />

          <textarea
            required
            type="text"
            className="entry-text"
            placeholder="Start typing here..."
            value={this.state.content}
            onChange={e => {
              this.setState({
                content: e.target.value
              });
            }}
          />

          <input
            className="submit-btn"
            type="submit"
            onClick={() => this.props.addPost(date, content)}
          />
        </form>
      </div>
    );
  }
}
