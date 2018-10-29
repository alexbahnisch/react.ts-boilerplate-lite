"use strict";
import * as React from "react"
import {Component, ErrorInfo} from "react"


interface Props {
  children?: any
}


interface State {
}


type SnapShot = any


export class BoilerplateComponent extends Component<Props, State> {
  static displayName = "BoilerplateComponent";
  static defaultProps = {};

  _element: Element;

  /**
   * Called first when mounting.
   */
  constructor(props: Props) {
    super(props);
    console.log(`${BoilerplateComponent.displayName}.constructor(props)`)
  }

  /**
   * Derives new state when mounting/updating,returns an object which is a subset of State or null.
   * Called second when mounting.
   * Called first when updating.
   */
  static getDerivedStateFromProps(props: Props, state: State): object | null {
    console.log(`${BoilerplateComponent.displayName}.getDerivedStateFromProps(props, state)`);
    return null;
  }

  /**
   * Called forth/last when mounting.
   */
  componentDidMount(): void {
    console.log(`${BoilerplateComponent.displayName}.componentDidMount()`)
  }

  /**
   * Called second when updating.
   * Return value dictates if further updating lifecycle hooks are called.
   */
  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    console.log(`${BoilerplateComponent.displayName}.shouldComponentUpdate(nextProps, nextState)`);
    return true;
  }

  /**
   * Called forth when updating.
   */
  getSnapshotBeforeUpdate(prevProps: Props, prevState: State): SnapShot {
    console.log(`${BoilerplateComponent.displayName}.getSnapshotBeforeUpdate(nextProps, nextState)`);
    return {}
  }

  /**
   * Called fifth/last when updating.
   */
  componentDidUpdate(prevProps: Props, prevState: State, snapshot: SnapShot): void {
    console.log(`${BoilerplateComponent.displayName}.componentDidUpdate(nextProps, nextState, snapShot)`);
  }

  /**
   * Called when un-mounting.
   */
  componentWillUnmount(): void {
    console.log(`${BoilerplateComponent.displayName}.componentWillUnmount(nextProps, nextState, snapShot)`);
  }

  /**
   * Called when there is an error during rendering, in a lifecycle hook, or in the constructor of any child component.
   */
  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log(`${BoilerplateComponent.displayName}.componentDidCatch(error, info)`);
  }

  /**
   * Called third when mounting.
   * Called third when updating.
   */
  render(): any {
    const {children} = this.props;

    return (
      <div ref={(element) => {
        this._element = element
      }}>
        {children}
      </div>
    )
  }
}
