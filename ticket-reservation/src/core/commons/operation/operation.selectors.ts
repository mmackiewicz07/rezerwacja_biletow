import {AppStoreState} from '../../app-store';
import {createSelector} from '@ngrx/store';
import {OperationState} from './operation.model';
import {HttpErrorResponse} from "@angular/common/http";

export interface OperationStateSelectors<T> {
  selectRes: (state: AppStoreState) => T | undefined;
  selectError: (state: AppStoreState) => HttpErrorResponse | undefined;
  selectLoading: (state: AppStoreState) => boolean;
  selectSuccess: (state: AppStoreState) => boolean;
  selectState: (state: AppStoreState) => OperationState<T>;
}
export const createOperationStateSelectors = <T>(
  selectState: (state: AppStoreState) => OperationState<T>
): OperationStateSelectors<T> => {
  return {
    selectRes: createSelector(selectState, (state) => state?.res),
    selectError: createSelector(selectState, (state) => state?.error),
    selectLoading: createSelector(selectState, (state) => !!state?.loading),
    selectSuccess: createSelector(selectState, (state) => !!state?.success),
    selectState: createSelector(selectState, (state) => state),
  };
};
