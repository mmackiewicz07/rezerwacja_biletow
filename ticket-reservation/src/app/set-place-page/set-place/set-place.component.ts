import { SummaryComponent } from './../summary/summary.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { first, map, withLatestFrom } from 'rxjs/operators';
import { Seance } from 'src/app/seance-page/store/seance-list/seances.model';
import { seanceSelectors } from 'src/app/seance-page/store/seance-list';
import { Store } from '@ngrx/store';
import { AppStoreState } from 'src/core/app-store';
import * as _ from 'lodash';
import { MatDialog } from '@angular/material/dialog';
import { selectPlaceActions } from '../store/place-select';

@Component({
  selector: 'app-set-place',
  templateUrl: './set-place.component.html',
  styleUrls: ['./set-place.component.scss']
})
export class SetPlaceComponent implements OnInit {

  seatsFormArray!: FormArray;

  seances$!: Observable<Seance[]>;
  seancePlacesTable!: boolean[] | undefined;

  selectedSeanceId$!: Observable<number>;
  selectedSeanceData$!: Observable<Seance | undefined>;

  placesForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private store: Store<AppStoreState>, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.seances$ = this.store.select(seanceSelectors.selectListItems);
    this.selectedSeanceId$ = this.getSelectedSeanceFromRoute();
    this.selectedSeanceData$ = this.getSelectedSeanceData();

    this.setFormArray();

    this.selectedSeanceData$.pipe(first()).subscribe(seanceData => {
      this.seancePlacesTable = seanceData?.spotsTable;
    });

    this.setPlacesFromEP();
  }

  get places(): FormArray {
    return <FormArray>this.placesForm.get('places');
  }

  private getSelectedSeanceData(): Observable<Seance | undefined> {
    return this.seances$.pipe(withLatestFrom(this.selectedSeanceId$), map(([seance, selectedId]) => _.find(seance, element => element?.id === selectedId)));
  }

  private setFormArray(): void {
    this.placesForm = this.fb.group({
      places: this.fb.array([]),
    })
  }

  setPlaces(place: boolean): FormGroup {
    console.log('place', place);
      return this.fb.group({
        isFree: place,
        selected: null,
      })
  }

  setPlacesFromEP(): void {
    if(this.seancePlacesTable) {
    for(let i = 0; i < this.seancePlacesTable?.length; i++) {
    this.places.push(this.setPlaces(this.seancePlacesTable[i]));
    }
  }
  }

  selectPlace(place: AbstractControl): void {
    if(!place?.value?.selected) {
      place.patchValue({selected: true})
    } else {
      place.patchValue({selected: false})
    }
  }

  countSelected(): string {
    const places = this.placesForm.get('places')?.value;
    let sum = 0;
    for (let i = 0; i < places.length; i++) {
      if(places[i]?.selected) {
        sum += 1;
      }
    }
    return `${sum}`;
  }

  goBack(): void {
    this.router.navigate([`/lista-seansow`])
  }

  goTosummary(): void {
    this.selectedSeanceId$.pipe(first()).subscribe(id => {
    this.store.dispatch(selectPlaceActions.selectPlaceActions.send({payload: {id, table: this.dataFactory()}}));
   let dialogRef = this.dialog.open(SummaryComponent, {
     width: '300px',
   });
   dialogRef.afterClosed().subscribe(() => {
      this.dialog.closeAll();
   });
  });
  }

  private getSelectedSeanceFromRoute(): Observable<number> {
    return this.route.params.pipe(map(params => params && +params.id));
  }

  private dataFactory(): any {
    let res: boolean[] = [];
    const placesTable = this.placesForm.get('places')?.value;
    _.forEach(placesTable, (element, i) => {
      if(element?.selected) {
        placesTable[i].isFree = false;
      }
      res.push(placesTable[i].isFree);
    })
    return res;
  }
}

