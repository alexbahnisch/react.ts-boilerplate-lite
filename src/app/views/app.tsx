"use strict";
import * as React from "react"
import {Component} from "react"

const CSS = require("./app.css");


export interface AppProps {
  children: string;
}

export class App extends Component<AppProps, undefined> {

  render(): JSX.Element {
    const {children} = this.props;

    return (
      <div className={CSS.root}>
        {children}
      </div>
    )
  }
}
