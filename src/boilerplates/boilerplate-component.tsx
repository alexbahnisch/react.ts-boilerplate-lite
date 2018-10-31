"use strict"
import * as React from "react"

interface IProps {
  children?: any
}

interface IState {
}

type SnapShot = any

export class BoilerplateComponent extends React.Component<IProps, IState> {
  public static displayName = "BoilerplateComponent"
  public static defaultProps = {}

  private element: Element

  /**
   * Called first when mounting.
   */
  constructor(props: IProps) {
    super(props)
    console.log(`${this.getClass().displayName}.constructor(props)`)
  }

  /**
   * Derives new state when mounting/updating,returns an object which is a subset of State or null.
   * Called second when mounting.
   * Called first when updating.
   */
  public static getDerivedStateFromProps(props: IProps, state: IState): object | null {
    console.log(`${BoilerplateComponent.displayName}.getDerivedStateFromProps(props, state)`)
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
  public shouldComponentUpdate(nextProps: IProps, nextState: IState): boolean {
    console.log(`${this.getClass().displayName}.shouldComponentUpdate(nextProps, nextState)`)
    return true
  }

  /**
   * Called forth when updating.
   */
  public getSnapshotBeforeUpdate(prevProps: IProps, prevState: IState): SnapShot {
    console.log(`${this.getClass().displayName}.getSnapshotBeforeUpdate(nextProps, nextState)`)
    return {}
  }

  /**
   * Called fifth/last when updating.
   */
  public componentDidUpdate(prevProps: IProps, prevState: IState, snapshot: SnapShot): void {
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
    return BoilerplateComponent
  }

  /**
   * Called third when mounting.
   * Called third when updating.
   */
  public render(): any {
    const {children} = this.props

    return (
      <div ref={(element: any) => {
        this.element = element
      }}>
        {children}
      </div>
    )
  }
}
