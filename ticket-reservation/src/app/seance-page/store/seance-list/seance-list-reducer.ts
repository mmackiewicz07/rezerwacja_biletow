import { listReducer } from './../../../../core/commons/list/list.reducer';
import { Action, combineReducers } from '@ngrx/store';
import { defaultInitStateList } from 'src/core/commons/list/list.reducer';
import { ListState } from './../../../../core/commons/list/list.model';
import { Seance } from './seances.model';
import { loadSeanceSlistActions } from './get-seance-list.actions';

export interface SeanceListState {
    list: ListState<Seance, {}>;
}

export const initialSeanceState: SeanceListState = {
    list: defaultInitStateList,
}

const reducer = combineReducers<SeanceListState>({
    list: listReducer(loadSeanceSlistActions)
}, initialSeanceState
);

export function seanceReducer(state: SeanceListState | undefined, action: Action) {
    return reducer(state, action)
}