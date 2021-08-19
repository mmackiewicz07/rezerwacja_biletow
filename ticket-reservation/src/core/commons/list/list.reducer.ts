import {ActionCreator, createReducer, on} from '@ngrx/store';
import {
  ListState,
  LoadListChangeParamsProps,
  LoadListFailProps,
  LoadListProps,
  LoadListSuccessProps,
} from './list.model';
import {StateById} from '../operation/operation.reducer';

export interface ListReducerActionsMap {
  get?: ActionCreator<string, any>;
  fail?: ActionCreator<string, any>;
  success?: ActionCreator<string, any>;
  changeParams?: ActionCreator<string, any>;
  clear?: ActionCreator<string, any>;
}

const reducers = {
  get: <T, P>(state: ListState<T, P>): ListState<T, P> => {
    return {
      ...state,
      loading: true,
      success: false,
      error: undefined,
    };
  },
  fail: <T, P>(state: ListState<T, P>, action: LoadListFailProps): ListState<T, P> => {
    const error = action.error;
    return {
      ...state,
      loading: false,
      error,
      success: false,
    };
  },
  success: <T, P>(state: ListState<T, P>, action: LoadListSuccessProps<T>) => {
    const items = action.res.data;
    const meta = action.res.meta;
    return { ...state, items, loading: false, success: true, error: null, meta};
  },
  changeParams: <T, P>(state: ListState<T, P>, action: LoadListChangeParamsProps<P>): ListState<T, P> => {
    const params = action.params;
    return {
      ...state,
      params: { ...params },
      success: false,
      error: undefined,
    };
  },
  clear: <T, P>(state: ListState<T, P>): ListState<T, P> => {
    return {
      ...state,
      items: [],
      loading: undefined,
      success: undefined,
      error: undefined,
      meta: undefined,
      params: undefined,
    };
  },
};

export const defaultInitStateList = { items: [] };
export const defaultInitOperationState = {};

export const listReducer = <T, P>(actionsMap: ListReducerActionsMap) => {
  return createReducer(
    {},
    on(actionsMap.get, reducers.get),
    on(actionsMap.fail, reducers.fail),
    on(actionsMap.success, reducers.success),
    on(actionsMap.changeParams, reducers.changeParams),
    on(actionsMap.clear, reducers.clear)
  );
};

export const listById = <T, P>(actionsMap: ListReducerActionsMap, initialState?: StateById<ListState<T, P>>) => {
  initialState = initialState || {};
  return createReducer(
    initialState,
    on(actionsMap.get, (state: StateById<ListState<T, P>>, action: LoadListProps<P>) => {
      const id: string | number = action?.id || 0;
      return {
        ...state,
        [id]: reducers.get(state[id]),
      };
    }),
    on(actionsMap.fail, (state: StateById<ListState<T, P>>, action: LoadListFailProps) => {
      const id: any = action?.id;
      return {
        ...state,
        [id]: reducers.fail(state[id], action),
      };
    }),
    on(actionsMap.success, (state: StateById<ListState<T, P>>, action: LoadListSuccessProps<T>) => {
      const id: any = action?.id;
      return {
        ...state,
        [id]: reducers.success(state[id], action),
      };
    }),
    on(actionsMap.changeParams, (state: StateById<ListState<T, P>>, action: LoadListChangeParamsProps<P>) => {
      const id: any = action?.id;
      return {
        ...state,
        [id]: reducers.changeParams(state[id], action),
      };
    }),
    on(actionsMap.clear, (state: StateById<ListState<T, P>>, action: LoadListChangeParamsProps<P>) => {
      const id: any = action?.id;
      return {
        ...state,
        [id]: reducers.clear(state[id]),
      };
    })
  );
};
