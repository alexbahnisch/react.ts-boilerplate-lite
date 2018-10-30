"use strict"
import { Action, combineReducers, createStore, Dispatch, Reducer, Store } from "redux"

enum ActionTypes {
  Decrement = "ActionTypes.Decrement",
  Increment = "ActionTypes.Increment",
}

interface IBoilerplateAction extends Action {
  type: ActionTypes
}

export interface IBoilerplateState {
  counter: number
}

const DEFAULT_STATE: IBoilerplateState = {
  counter: 0,
}

interface IDecrementAction extends IBoilerplateAction {
  type: ActionTypes.Decrement
  decrement: number
}

interface IIncrementAction extends IBoilerplateAction {
  type: ActionTypes.Increment
  increment: number
}

export function createDecrementHandler(dispatch: Dispatch): (count: number) => void {
  return function decrement(count: number): void {
    dispatch({
      decrement: count,
      type: ActionTypes.Decrement,
    })
  }
}

export function createIncrementHandler(dispatch: Dispatch): (count: number) => void {
  return function increment(count: number): void {
    dispatch({
      increment: count,
      type: ActionTypes.Increment,
    })
  }
}

type BoilerplateActions = IDecrementAction | IIncrementAction

export function templateReducer(state: IBoilerplateState = DEFAULT_STATE, action: BoilerplateActions): IBoilerplateState {
  switch (action.type) {
    case ActionTypes.Decrement:
      return {
        ...state,
        counter: state.counter - action.decrement,
      }

    case ActionTypes.Increment:
      return {
        ...state,
        counter: state.counter + action.increment,
      }

    default:
      return state
  }
}

/**
 * Combining reducer won't occur in individual ducks, this is just for documentation purpose,
 * implementations of this template should delete all the code below this point asap.
 */
export interface IRootState {
  template: IBoilerplateState
}

const rootReducer: Reducer<IRootState> = combineReducers({
  template: templateReducer,
})

export const store: Store = createStore(rootReducer)
