"use strict"
import * as React from "react"

// @ts-ignore
import CSS = require("./app.css")

interface IProps {
  children: string
}

export class App extends React.Component<IProps, undefined> {

  public render(): JSX.Element {
    const { children } = this.props

    return (
      <div className={CSS.root}>
        {children}
      </div>
    )
  }
}
