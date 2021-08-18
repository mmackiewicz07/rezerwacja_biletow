import { selectSeanceState } from './../seance.reducers';
import { createSelector } from '@ngrx/store';
import { createListStateSelectors } from 'src/core/commons/list/list.selectors';

const slectSeance = createSelector(selectSeanceState, (state) => state?.seanceList);
const selectList = createSelector(slectSeance, (state) => state?.list);


export const selectListItems = createListStateSelectors(selectList).selectItems;
export const selectListLoading = createListStateSelectors(selectList).selectLoading;
export const selectListTotalCount = createListStateSelectors(selectList).selectTotalCount;