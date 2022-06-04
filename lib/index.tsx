import * as React from "react";
import * as ReactDOM from "react-dom";
import Icon from "./icon";

console.log(React);

const fn: React.ReactEventHandler = (e) => {
  console.log(e.target);
};

ReactDOM.render(
  <div>
    <Icon name="wechart" onClick={fn} className="wechart" />
  </div>,
  document.querySelector("#root")
);
