import { combineReducers, createFeatureSelector } from "@ngrx/store";
import { featureStoreEnum } from "src/core/app-store/featureStore.enum";
import * as placeSelect from './place-select/place-select.reducer';

export interface placeState {
    placeSelect: placeSelect.selectPlaceState
}

export const initialState: placeState = {
    placeSelect: placeSelect.initialSeanceState
}

export const reducer = combineReducers<placeState>({
    placeSelect: placeSelect.placeReducer
}, initialState);

export const selectPlaceState = createFeatureSelector<placeState>(featureStoreEnum.seance);