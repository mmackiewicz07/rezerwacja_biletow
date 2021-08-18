import { seanceActions } from './index';
import { AppStoreModule } from './../../../../core/app-store/app-store.module';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppStoreState } from 'src/core/app-store';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { SeanceService } from './seance-service';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class SeanceEffects {
    getSeanceList$ = createEffect(() =>
    this.actions$.pipe(
        ofType(seanceActions.loadSeanceSlistActions.get),
        exhaustMap(() => this.service.getSeanceList().pipe(
            map((res) => seanceActions.loadSeanceSlistActions.success({res})),
            catchError((error) => of(seanceActions.loadSeanceSlistActions.fail({error})))
        ))
    ));

    constructor(private store: Store<AppStoreState>, private actions$: Actions, private service: SeanceService) {}
}