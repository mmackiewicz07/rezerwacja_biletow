import {SortDirection} from '@angular/material/sort';
import {IdProps} from "../models/action.model";
import {HttpErrorResponse} from "@angular/common/http";

export interface ListMeta {
  totalCount: number;
}

export interface ListState<T, P = ListParams | undefined> {
  loading?: boolean;
  success?: boolean;
  error?: Error;
  params?: P;
  meta?: ListMeta;
  items?: T[];
}

export interface ListResponse<T> {
  data: T[];
  meta?: ListMeta;
}

export interface ListParams {
  page?: number;
  pageSize?: number;
  sort: string;
  direction: SortDirection;
}

export const defaultListParams: ListParams = {
  page: 0,
  pageSize: 10,
  sort: '',
  direction: '',
};

export interface LoadListProps<P> extends IdProps {
  params?: P;
}

export interface LoadListSuccessProps<T> extends IdProps {
  res: ListResponse<T>;
}

export interface LoadListFailProps extends IdProps {
  error: HttpErrorResponse | Error;
}

export interface LoadListChangeParamsProps<T> extends IdProps {
  params: T;
}

export interface LoadListClearProps extends IdProps {
}

export const defaultListParamKey = `q`;



