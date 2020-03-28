import React, { Component } from "react";
import "./EditButton.css";

export default class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      isInEditMode: false
    };
  }

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
  };

  updateComponentValue = () => {
    this.setState({
      isInEditMode: false,
      content: this.refs.textInput.value
    });
  };

  renderEdit = () => {
    return (
      <div>
        <textarea
          type="text"
          defaultValue={this.props.content}
          ref="textInput"
          className="text-area"
        />
        <button className="cancel-btn" onClick={this.changeEditMode}>
          cancel
        </button>
        <button className="accept-btn" onClick={this.updateComponentValue}>
          accept
        </button>
      </div>
    );
  };

  renderDefault = () => {
    return (
      <div>
        {/* <button onDoubleClick={this.changeEditMode}>Edit</button> */}
        <div onDoubleClick={this.changeEditMode}>{this.props.content}</div>
      </div>
    );
  };

  render(props) {
    return this.state.isInEditMode ? this.renderEdit() : this.renderDefault();
  }
}
