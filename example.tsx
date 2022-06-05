import * as React from "react";
import ReactDOM from "react-dom";
import IconExample from "./lib/icon/icon.example";
import { HashRouter as Router, Link, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <Link to="/icon">icon</Link>
    </div>
    <div>
      <Route path="/icon" component={IconExample}></Route>
    </div>
  </Router>,
  document.querySelector("#root")
);
