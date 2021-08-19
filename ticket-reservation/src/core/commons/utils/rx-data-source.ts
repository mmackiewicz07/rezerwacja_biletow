import { combineLatest as observableCombineLatest, Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import * as _ from 'lodash';
import { Sort } from '@angular/material/sort';

export class RxDataSource<T> extends DataSource<T> {
  loaded$: Observable<boolean>;
  empty$: Observable<boolean>;

  constructor(private data$: Observable<T[]>, private sort$?: Observable<Sort>) {
    super();

    this.loaded$ = this.data$.pipe(map((data: T[]) => !_.isNil(data)));
    this.empty$ = this.data$.pipe(map((data: T[]) => _.isNil(data) || data.length === 0));
  }

  connect(collectionViewer: CollectionViewer): Observable<T[]> {
    return observableCombineLatest([this.data$, this.sort$ || observableOf(null)]).pipe(
      map(([data, sort]) => {
        if (!_.isNil(data) && sort && sort.active) {
          const sortedData = data.sort((a, b) => {
            let aValue = _.get(a, sort.active as string);
            let bValue = _.get(b, sort.active as string);
            aValue = !_.isNil(aValue) ? aValue : '';
            bValue = !_.isNil(bValue) ? bValue : '';
            if (_.isNumber(aValue) && _.isNumber(bValue)) {
              return aValue > bValue ? 1 : -1;
            } else {
              return aValue.toString().localeCompare(bValue.toString());
            }
          });
          return _.isEqual(sort.direction, 'asc')
            ? sortedData
            : _.isEqual(sort.direction, 'desc')
            ? sortedData.reverse()
            : !sort.direction
            ? _.sortBy(data, ['ID'])
            : data;
        }
        return data;
      })
    );
  }

  disconnect(collectionViewer: CollectionViewer): void {}
}
