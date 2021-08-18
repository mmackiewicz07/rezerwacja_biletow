import { seanceActions, seanceSelectors } from './../store/seance-list/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStoreState } from 'src/core/app-store';
import { Seance } from '../store/seance-list/seances.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-seance-list',
  templateUrl: './seance-list.component.html',
  styleUrls: ['./seance-list.component.scss']
})
export class SeanceListComponent implements OnInit {

  seances$!: Observable<Seance[]>;
  seanceLoading$!: Observable<boolean>;

  constructor(private store: Store<AppStoreState>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getSeancesList();

    this.seances$ = this.store.select(seanceSelectors.selectListItems);
    this.seanceLoading$ = this.store.select(seanceSelectors.selectListLoading);

  }

  goToSetPlace(id: number): void {
    this.router.navigate([`/wybor-miejsca/${id}`])
  }

  private getSeancesList(): void {
    this.store.dispatch(seanceActions.loadSeanceSlistActions.get());
  }

}
