"use strict"
import * as React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"

import { IRootState } from "./boilerplate-ducks"

interface IBoilerplateContainerProps {
}

interface IState {
}

interface IMappedState {
}

interface IMappedDispatch {
}

/**
 * Called before mounting and when the redux state is updated.
 */
function mapState(state: IRootState, props: Props): IMappedState {
  return {}
}

/**
 * Called before mounting and when the redux state is updated (if props is included).
 */
function mapDispatch(dispatch: Dispatch, props: Props): IMappedDispatch {
  return {}
}

type Props = IBoilerplateContainerProps & IMappedState & IMappedDispatch
type SnapShot = any

// noinspection TsLint
class _BoilerplateContainer extends React.Component<Props, IState> {
  public static displayName = "BoilerplateContainer"
  public static defaultProps = {}

  public element: Element

  /**
   * Called first when mounting.
   */
  constructor(props: Props) {
    super(props)
    console.log(`${this.getClass().displayName}.constructor(props)`)
  }

  /**
   * Derives new state when mounting/updating,returns an object which is a subset of State or null.
   * Called second when mounting.
   * Called first when updating.
   */
  public static getDerivedStateFromProps(props: Props, state: IState): object | null {
    console.log(`${_BoilerplateContainer.displayName}.getDerivedStateFromProps(props, state)`)

    return null
  }

  /**
   * Called forth/last when mounting.
   */
  public componentDidMount(): void {
    console.log(`${this.getClass().displayName}.componentDidMount()`)
  }

  /**
   * Called second when updating.
   * Return value dictates if further updating lifecycle hooks are called.
   */
  public shouldComponentUpdate(nextProps: Props, nextState: IState): boolean {
    console.log(`${this.getClass().displayName}.shouldComponentUpdate(nextProps, nextState)`)
    return true
  }

  /**
   * Called forth when updating.
   */
  public getSnapshotBeforeUpdate(prevProps: Props, prevState: IState): SnapShot {
    console.log(`${this.getClass().displayName}.getSnapshotBeforeUpdate(nextProps, nextState)`)
    return {}
  }

  /**
   * Called fifth/last when updating.
   */
  public componentDidUpdate(prevProps: Props, prevState: IState, snapshot: SnapShot): void {
    console.log(`${this.getClass().displayName}.componentDidUpdate(nextProps, nextState, snapShot)`)
  }

  /**
   * Called when un-mounting.
   */
  public componentWillUnmount(): void {
    console.log(`${this.getClass().displayName}.componentWillUnmount(nextProps, nextState, snapShot)`)
  }

  /**
   * Called when there is an error during rendering, in a lifecycle hook, or in the constructor of any child component.
   */
  public componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.log(`${this.getClass().displayName}.componentDidCatch(error, info)`)
  }

  // noinspection JSMethodCanBeStatic, TsLint
  public getClass() {
    return _BoilerplateContainer
  }

  /**
   * Called third when mounting.
   * Called third when updating.
   */
  public render(): any {
    const {children} = this.props

    return (
      <div ref={(element: Element) => {
        this.element = element
      }}>
        {children}
      </div>
    )
  }
}

export const BoilerplateContainer = connect(mapState, mapDispatch)(_BoilerplateContainer)
