import { operationReducer } from './../../../../core/commons/operation/operation.reducer';
import { defaultInitOperationState } from './../../../../core/commons/list/list.reducer';
import { OperationState } from "src/core/commons/operation/operation.model";
import { selectPlaceActions } from './place-select.actions';
import { Action, combineReducers } from '@ngrx/store';

export interface selectPlaceState {
    selectPlace: OperationState<boolean[]>;
}

export const initialSeanceState: selectPlaceState = {
    selectPlace: defaultInitOperationState,
}

const reducer = combineReducers<selectPlaceState>({
    selectPlace: operationReducer(selectPlaceActions)
}, initialSeanceState
);

export function placeReducer(state: selectPlaceState | undefined, action: Action) {
    return reducer(state, action)
}