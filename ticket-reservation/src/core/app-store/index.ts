import { InjectionToken } from "@angular/core";
import { routerReducer, RouterState } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";

export interface AppStoreState {
    router: RouterState
}

export function getReducers(): ActionReducerMap<AppStoreState> {
    return {
        router: routerReducer
    }
};

export const reducerToken = new InjectionToken<ActionReducerMap<AppStoreState>>('Reducers');

export const reducerProvider = [{provide: reducerToken, useFactory: getReducers}];