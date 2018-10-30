"use strict"
import * as React from "react"
import * as ReactDOM from "react-dom"

import "./main.css"
import { createElement } from "./utils"
import { App } from "./views/app"

ReactDOM.render(
  <App>
    Hello World!!
  </App>,
  createElement("react.ts-boilerplate-lite"),
)
