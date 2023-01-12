import React from "react";
import ReactDom from "react-dom";

//stateless functional component
//always return JSX

function Greeting() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
