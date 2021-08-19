import { operationActionsFactory } from './../../../../core/commons/operation/operation.actions';

export const selectPlaceActions = operationActionsFactory<any, any>(
    '[select-place] select place'
);