// These examples show ways to avoid using a surrounding parent element.
import React from "react";

const Child = props => <div>{props.text}</div>;

function RenderArray() {
  // Return an array of child components to avoid a surrounding JSX element:
  return [
    <Child text="Array child 1" />,
    <Child text="Array child 2" />,
    <Child text="Array child 3" />
  ];
}

function RenderFragment() {
  // Use React.Fragment to surround multiple child elements to prevent rendering extra nodes to the DOM.
  return (
    <React.Fragment>
      <Child text="Fragment child 1" />
      <Child text="Fragment child 2" />
      <Child text="Fragment child 3" />
    </React.Fragment>
  );
}

function RenderFragmentShorthand() {
  // Use the React.Fragment shorthand to surround multiple child elements to prevent rendering extra nodes to the DOM.
  return (
    <>
      <Child text="Fragment shorthand child 1" />
      <Child text="Fragment shorthand child 2" />
      <Child text="Fragment shorthand child 3" />
    </>
  );
}

//export default RenderArray;
//export default RenderFragment;
export default RenderFragmentShorthand;
