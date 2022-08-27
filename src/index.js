import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "55px",
  border: "5px solid gray"
  // backgroundColor: "black"
};

customStyle.color = "blue";
customStyle.backgroundColor = "yellow";

ReactDOM.render(
  <div>
    <h1 style={customStyle}>hello world</h1>
  </div>,
  document.getElementById("root")
);
