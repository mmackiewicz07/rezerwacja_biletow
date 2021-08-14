import {IdProps} from "../models/action.model";
import {HttpErrorResponse} from "@angular/common/http";

export interface OperationState<T> {
  res?: T;
  loading?: boolean;
  success?: boolean;
  error?: any;
}

export interface SendOperationProps<P> extends IdProps {
    payload?: P;
}

export interface SendOperationPayloadProps<P> extends IdProps {
    payload: P;
}

export interface SendOperationSuccessProps<T> extends IdProps {
    res: T;
}

export interface SendOperationFailProps extends IdProps {
    error: HttpErrorResponse | Error;
}

export interface SendOperationClearProps extends IdProps {
}
