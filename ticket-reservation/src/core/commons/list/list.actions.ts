import { createAction, props } from '@ngrx/store';
import {LoadListChangeParamsProps, LoadListFailProps, LoadListProps} from "./list.model";

export const listActionsFactory = <T, P>(type: string) => {
  return {
    get: createAction(type, (payload?: LoadListProps<P>) => payload || {}),
    success: createAction(type + ' success', props<any>()),
    fail: createAction(type + ' fail', props<LoadListFailProps>()),
    clear: createAction(type + ' clear'),
    changeParams: createAction(type + ' changeParams', props<LoadListChangeParamsProps<P>>()),
  };
};
