"use strict";
import * as React from "react"
import * as ReactDOM from "react-dom"

import {App} from "./views/app"
import {createElement} from "./utils/bootstrap"
import "./main.css"


ReactDOM.render(
  <App>
    Hello World!!
  </App>,
  createElement("react.ts-boilerplate-lite")
);
