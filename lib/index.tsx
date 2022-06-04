import * as React from "react";
import * as ReactDOM from "react-dom";
import Icon from "./icon";

console.log(React);

const fn = () => {
  console.log("我被点击了");
};

ReactDOM.render(
  <div>
    <Icon name="wechart" onClick={fn} />
    <Icon name="qq" onClick={fn} />
  </div>,
  document.querySelector("#root")
);
