import React, { Component } from "react";
import "./EditButton.css";

export default class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content,
      // newContent: "",
      isInEditMode: false
    };
  }

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
  };

  updateComponentValue = () => {
    const content = this.state.content;
    this.setState({
      isInEditMode: false
      // content: this.refs.textInput.value
    });
    this.props.editPost(this.props.id, content);
  };

  renderEdit = () => {
    // console.log(this.ref.textInput.value);
    return (
      <div>
        <textarea
          defaultValue={this.props.content}
          // ref="textInput"
          className="text-area"
          value={this.state.content}
          onChange={e => {
            this.setState({
              content: e.target.value
            });
          }}
        />

        <div className="edit-button-container">
        <button className="cancel-btn" onClick={this.changeEditMode}>
          &larr; C A N C E L
        </button>
        <button className="accept-btn" onClick={this.updateComponentValue}>
          A C C E P T &rarr;
        </button>
        </div>
      </div>
    );
  };

  renderDefault = () => {
    return (
      <div>
        {/* <button onClick={this.changeEditMode}>Edit</button> */}
        <div
          className="tooltip"
          // title="* Doubeclick text this post to edit"
          onDoubleClick={this.changeEditMode}
        >
          <span className="tooltiptext" title="hover text">
            * DOUBLECLICK POST TO START EDITING *
          </span>
          {this.state.content}
        </div>
      </div>
    );
  };

  render(props) {
    return this.state.isInEditMode ? this.renderEdit() : this.renderDefault();
  }
}
