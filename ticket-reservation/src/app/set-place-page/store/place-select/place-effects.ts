import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { of } from "rxjs";
import { exhaustMap, catchError, map } from "rxjs/operators";
import { selectPlaceActions } from './index';;
import { PlaceService } from "./place-service";

@Injectable()
export class PlaceEffects {
    selectPlace$ = createEffect(() =>
    this.actions$.pipe(
        ofType(selectPlaceActions.selectPlaceActions.send),
        exhaustMap((action) => this.service.selectPlace(action?.payload).pipe(
            map((res) => selectPlaceActions.selectPlaceActions.success({res})),
            catchError((error) => of(selectPlaceActions.selectPlaceActions.fail({error})))
        ))
    ));

    constructor(private actions$: Actions, private service: PlaceService) {}
}