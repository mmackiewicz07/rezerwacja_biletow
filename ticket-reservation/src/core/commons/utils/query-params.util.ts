import * as _ from 'lodash';
import { defaultListParamKey } from '../list/list.model';

export class QueryParamsUtil {
  static stringifyByKey(params: { [key: string]: Object }, key?: string): { [key: string]: string } {
    key = key || defaultListParamKey;
    return {
      [key]: QueryParamsUtil.stringify(params),
    };
  }

  static stringify(params: { [key: string]: Object }): string {
    return JSON.stringify(_.omitBy(params, _.isNil));
  }

  static parseByKey<P = { [key: string]: Object }>(params: { [key: string]: Object }, key?: string):P {
    key = key || defaultListParamKey;
    return QueryParamsUtil.parse<P>(_.get(params, key, '{}') as string);
  }

  static parse<P = { [key: string]: Object }>(q: string): P {
    try {
      return JSON.parse(q) as P;
    } catch (e) {
      return {} as P;
    }
  }
}
