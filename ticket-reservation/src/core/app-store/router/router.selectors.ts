import { getSelectors, RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector } from '@ngrx/store';

export const selectRouter = createFeatureSelector<RouterReducerState>('router');

export const {
    selectCurrentRoute,
    selectQueryParams,

} = getSelectors(selectRouter);