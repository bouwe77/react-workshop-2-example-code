import React, { useState } from "react";

function Form(props) {
  let descriptionInputField = React.createRef();

  function submitForm(event) {
    // Prevent that a submit reloads the page.
    event.preventDefault();

    // Read the entered description from the textbox
    const description = descriptionInputField.current.value;

    // Call the addToDo callback function from props and supply the entered description.
    props.addToDo(description);

    // Clear the description so the textbox is cleared.
    descriptionInputField.current.clear();
  }

  return (
    <form onSubmit={submitForm}>
      <input type="text" ref={descriptionInputField} />
      <br />
      <button type="submit">OK</button>
    </form>
  );
}

export default Form;
