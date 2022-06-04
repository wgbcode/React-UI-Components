import * as React from "react";
import * as ReactDOM from "react-dom";
import Icon from "./icon";

console.log(React);
ReactDOM.render(
  <div>
    <Icon name="wechart" />
    <Icon name="qq" />
  </div>,
  document.querySelector("#root")
);
