import { featureStoreEnum } from './../../../core/app-store/featureStore.enum';
import { combineReducers, createFeatureSelector } from "@ngrx/store"
import * as seance from './seance-list/seance-list-reducer';

export interface SeanceState {
    seanceList: seance.SeanceListState;
}

export const initialState: SeanceState = {
    seanceList: seance.initialSeanceState
}

export const reducer = combineReducers<SeanceState>({
    seanceList: seance.seanceReducer
}, initialState);

export const selectSeanceState = createFeatureSelector<SeanceState>(featureStoreEnum.seance);