import { AppStoreState } from '../../app-store';
import { ListState } from './list.model';
import { createSelector } from '@ngrx/store';

export interface ListStateSelectors<T, P> {
  selectItems: (state: AppStoreState) => T[];
  selectParams: (state: AppStoreState) => P | undefined;
  selectError: (state: AppStoreState) => Error | undefined;
  selectLoading: (state: AppStoreState) => boolean;
  selectSuccess: (state: AppStoreState) => boolean;
  selectTotalCount: (state: AppStoreState) => number;
  selectState: (state: AppStoreState) => ListState<T, P>;
}
export const createListStateSelectors = <T, P>(
  selectState: (state: AppStoreState) => ListState<T, P>
): ListStateSelectors<T, P> => {
  return {
    selectItems: createSelector(selectState, (state) => state?.items || []),
    selectParams: createSelector(selectState, (state) => state?.params),
    selectError: createSelector(selectState, (state) => state?.error),
    selectLoading: createSelector(selectState, (state) => !!state?.loading),
    selectSuccess: createSelector(selectState, (state) => !!state?.success),
    selectTotalCount: createSelector(selectState, (state) => state?.meta?.totalCount || 0),
    selectState: createSelector(selectState, (state) => state),
  };
};
