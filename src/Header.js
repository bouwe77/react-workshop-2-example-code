import React from "react";

function Header(props) {
  function prevClick() {
    props.prevExample();
  }

  function nextClick() {
    props.nextExample();
  }

  return (
    <div className="header">
      <span>Examples React.js workshop</span>
      <button
        className="example-nav"
        disabled={!props.hasPrev}
        onClick={prevClick}
      >
        &lt;&lt;
      </button>
      <button
        className="example-nav"
        disabled={!props.hasNext}
        onClick={nextClick}
      >
        &gt;&gt;
      </button>
    </div>
  );
}

export default Header;
