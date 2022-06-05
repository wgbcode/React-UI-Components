import * as React from "react";
import * as ReactDOM from "react-dom";
import Icon from "./icon/icon";

console.log(React);

const fn: React.ReactEventHandler = (e) => {
  console.log(e.target);
};

ReactDOM.render(
  <div>
    <Icon
      name="wechart"
      onClick={fn}
      className="wechart"
      onMouseEnter={() => console.log("enter")}
      onMouseLeave={() => console.log("leave")}
      onTouchStart={() => console.log("touch")}
    />
  </div>,
  document.querySelector("#root")
);
