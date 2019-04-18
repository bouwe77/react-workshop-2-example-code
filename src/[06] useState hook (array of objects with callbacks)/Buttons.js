import React from "react";

export default class Buttons extends React.Component {
  handleUpdateClick = () => {
    this.props.updatePhoto();
  };

  handleDeleteClick = () => {
    this.props.removePhoto();
  };

  handleAddClick = () => {
    this.props.addPhoto();
  };

  render() {
    return (
      <div className="buttons">
        <button onClick={this.handleAddClick}>+</button>
        &nbsp;
        <button onClick={this.handleUpdateClick}>&#x21bb;</button>
        &nbsp;
        <button onClick={this.handleDeleteClick}>-</button>
      </div>
    );
  }
}
