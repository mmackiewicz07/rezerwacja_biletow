import {createAction, props} from '@ngrx/store';
import {
  SendOperationClearProps,
  SendOperationFailProps, SendOperationPayloadProps,
  SendOperationProps,
  SendOperationSuccessProps
} from "./operation.model";

export const operationActionsFactory = <P, T>(type: string) => {
  return {
    send: createAction(type, (payload?: SendOperationProps<P>) => payload || {}),
    success: createAction(type + ' success', props<SendOperationSuccessProps<T>>()),
    fail: createAction(type + ' fail', props<SendOperationFailProps>()),
    clear: createAction(type + ' clear', (payload?: SendOperationClearProps) => payload || {})
  };
};

export const operationPayloadActionsFactory = <P, T>(type: string) => {
  return {
    send: createAction(type, (payload: SendOperationPayloadProps<P>) => payload || {}),
    success: createAction(type + ' success', props<SendOperationSuccessProps<T>>()),
    fail: createAction(type + ' fail', props<SendOperationFailProps>()),
    clear: createAction(type + ' clear', (payload?: SendOperationClearProps) => payload || {})
  };
};
