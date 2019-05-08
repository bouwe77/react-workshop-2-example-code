import React, { useState } from "react";

function Form(props) {
  const maxLength = 5;
  const [description, setDescription] = useState("");
  const [remainingChars, setRemainingChars] = useState(maxLength);

  function onChangeDescription(event) {
    const textbox = event.target;

    const remaining = maxLength - textbox.value.length;
    setRemainingChars(remaining);

    if (remaining <= 0) return;

    setDescription(textbox.value);
  }

  function submitForm(event) {
    // Prevent that a submit reloads the page.
    event.preventDefault();

    // Call the addToDo callback function from props and supply the entered description.
    props.addToDo(description);

    // Clear the description so the textbox is cleared.
    setDescription("");
  }

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        // The value is "read" from state: one way data binding
        value={description}
        // Events are used to update state
        onChange={onChangeDescription}
      />
      {remainingChars}
      <br />
      <button type="submit">OK</button>
    </form>
  );
}

export default Form;
