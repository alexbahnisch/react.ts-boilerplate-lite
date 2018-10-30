`use strict`;
import * as React from "react"
import {Component, ErrorInfo} from "react"
import {connect} from "react-redux";
import {Dispatch} from "redux";

import {IRootState} from "./boilerplate-ducks";


interface _Prop {
}


interface State {
}


interface MappedState {
}


interface MappedDispatch {
}


/**
 * Called before mounting and when the redux state is updated.
 */
function mapState(state: IRootState, props: Props): MappedState {
  return {}
}


/**
 * Called before mounting and when the redux state is updated (if props is included).
 */
function mapDispatch(dispatch: Dispatch, props: Props): MappedDispatch {
  return {}
}


type Props = _Prop & MappedState & MappedDispatch
type SnapShot = any


class _BoilerplateContainer extends Component<Props, State> {
  static displayName = "BoilerplateContainer";
  static defaultProps = {};

  _element: Element;

  /**
   * Called first when mounting.
   */
  constructor(props: Props) {
    super(props);
    console.log(`${_BoilerplateContainer.displayName}.constructor(props)`)
  }

  /**
   * Derives new state when mounting/updating,returns an object which is a subset of State or null.
   * Called second when mounting.
   * Called first when updating.
   */
  static getDerivedStateFromProps(props: Props, state: State): object | null {
    console.log(`${_BoilerplateContainer.displayName}.getDerivedStateFromProps(props, state)`);
    return null;
  }

  /**
   * Called forth/last when mounting.
   */
  componentDidMount(): void {
    console.log(`${_BoilerplateContainer.displayName}.componentDidMount()`)
  }

  /**
   * Called second when updating.
   * Return value dictates if further updating lifecycle hooks are called.
   */
  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    console.log(`${_BoilerplateContainer.displayName}.shouldComponentUpdate(nextProps, nextState)`);
    return true;
  }

  /**
   * Called forth when updating.
   */
  getSnapshotBeforeUpdate(prevProps: Props, prevState: State): SnapShot {
    console.log(`${_BoilerplateContainer.displayName}.getSnapshotBeforeUpdate(nextProps, nextState)`);
    return {}
  }

  /**
   * Called fifth/last when updating.
   */
  componentDidUpdate(prevProps: Props, prevState: State, snapshot: SnapShot): void {
    console.log(`${_BoilerplateContainer.displayName}.componentDidUpdate(nextProps, nextState, snapShot)`);
  }

  /**
   * Called when un-mounting.
   */
  componentWillUnmount(): void {
    console.log(`${_BoilerplateContainer.displayName}.componentWillUnmount(nextProps, nextState, snapShot)`);
  }

  /**
   * Called when there is an error during rendering, in a lifecycle hook, or in the constructor of any child component.
   */
  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log(`${_BoilerplateContainer.displayName}.componentDidCatch(error, info)`);
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


export const BoilerplateContainer = connect(mapState, mapDispatch)(_BoilerplateContainer);
