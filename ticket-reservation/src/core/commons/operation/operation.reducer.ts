import { ActionCreator, createReducer, on } from '@ngrx/store';
import {
  OperationState,
  SendOperationClearProps,
  SendOperationFailProps,
  SendOperationProps,
  SendOperationSuccessProps,
} from './operation.model';

export interface OperationReducerActionsMap {
  send?: ActionCreator<string, any>;
  fail?: ActionCreator<string, any>;
  success?: ActionCreator<string, any>;
  clear?: ActionCreator<string, any>;
}

const reducers = {
  send: <T>(state: OperationState<T>): OperationState<T> => {
    return {
      ...state,
      res: undefined,
      loading: true,
      success: false,
      error: null,
    };
  },
  fail: <T>(state: OperationState<T>, action: SendOperationFailProps): OperationState<T> => {
    const error = action.error;
    return {
      ...state,
      loading: false,
      error,
      success: false,
    };
  },
  success: <T>(state: OperationState<T>, action: SendOperationSuccessProps<T>) => {
    const res = action.res;
    return { res, loading: false, success: true, error: null };
  },
  clear: <T>(state: OperationState<T>): OperationState<T> => {
    return {
      ...state,
      res: undefined,
      loading: undefined,
      success: undefined,
      error: undefined,
    };
  },
};

export const operationReducer = <T>(actionsMap: OperationReducerActionsMap, initialState?: OperationState<T>) => {
  initialState = initialState || {};
  return createReducer(
    initialState,
    on(actionsMap.send, reducers.send),
    on(actionsMap.fail, reducers.fail),
    on(actionsMap.success, reducers.success),
    on(actionsMap.clear, reducers.clear)
  );
};

export type StateById<T> = { [id: string]: T };

export const operationReducerById = <T, P>(
  actionsMap: OperationReducerActionsMap,
  initialState?: StateById<OperationState<T>>
) => {
  initialState = initialState || {};
  return createReducer(
    initialState,
    on(actionsMap.send, (state: StateById<OperationState<T>>, action: SendOperationProps<T>) => {
      const id: any = action?.id;
      return {
        ...state,
        [id]: reducers.send(state[id]),
      };
    }),
    on(actionsMap.fail, (state: StateById<OperationState<T>>, action: SendOperationFailProps) => {
      const id: any = action?.id;
      return {
        ...state,
        [id]: reducers.fail(state[id], action),
      };
    }),
    on(actionsMap.success, (state: StateById<OperationState<T>>, action: SendOperationSuccessProps<T>) => {
      const id: any = action?.id;
      return {
        ...state,
        [id]: reducers.success(state[id], action),
      };
    }),
    on(actionsMap.clear, (state: StateById<OperationState<T>>, action: SendOperationClearProps) => {
      const id: any = action?.id;
      return {
        ...state,
        [id]: reducers.clear(state[id]),
      };
    })
  );
};
