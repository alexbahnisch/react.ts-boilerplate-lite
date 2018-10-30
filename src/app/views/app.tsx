"use strict";
import * as React from "react"
import {Component} from "react"

const CSS = require("./app.css");


interface Props {
  children: string;
}


export class App extends Component<Props, undefined> {

  render(): JSX.Element {
    const {children} = this.props;

    return (
      <div className={CSS.root}>
        {children}
      </div>
    )
  }
}
