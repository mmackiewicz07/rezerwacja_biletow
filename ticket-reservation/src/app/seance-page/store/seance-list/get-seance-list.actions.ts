import { listActionsFactory } from './../../../../core/commons/list/list.actions';
import { Seance } from './seances.model';


export const loadSeanceSlistActions = listActionsFactory<Seance[], {}>(
    '[seances-list] Load seances list action'
);