import { HYDRATE } from "next-redux-wrapper"
import { AnyAction, CombinedState, combineReducers } from "@reduxjs/toolkit"
import modalSlice, { ModalState } from "./modalReducer"
import authslice, { AuthState } from "./auth"

export interface IState {
  auth: AuthState
  modal: ModalState
}

export const rootReducer = (
  state: IState | undefined,
  action: AnyAction,
): CombinedState<IState> => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  }
  return combineReducers({
    auth: authslice.reducer,
    modal: modalSlice.reducer,
  })(state, action)
}

rootReducer
export type RootState = ReturnType<typeof rootReducer>
