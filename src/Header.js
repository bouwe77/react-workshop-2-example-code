import React from "react";

class Header extends React.Component {
  prevClick = () => {
    this.props.prevExample();
  };

  nextClick = () => {
    this.props.nextExample();
  };

  render = () => {
    return (
      <div className="header">
        <span>Examples React.js workshop</span>
        <button
          className="example-nav"
          disabled={!this.props.hasPrev}
          onClick={this.prevClick}
        >
          &lt;&lt;
        </button>
        <button
          className="example-nav"
          disabled={!this.props.hasNext}
          onClick={this.nextClick}
        >
          &gt;&gt;
        </button>
      </div>
    );
  };
}

export default Header;
