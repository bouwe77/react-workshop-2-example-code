import React from "react";

const TreeStructure = () => (
  <div className="tree">
    Components:
    <ul>
      <li>
        App
        <ul>
          <li>Header</li>
          <li>Form</li>
          <li>ToDoList</li>
          <li>TreeStructure</li>
        </ul>
      </li>
    </ul>
  </div>
);

export default TreeStructure;
