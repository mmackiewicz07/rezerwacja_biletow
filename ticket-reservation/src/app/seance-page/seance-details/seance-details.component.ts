import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Seance } from '../store/seance-list/seances.model';

@Component({
  selector: 'app-seance-details',
  templateUrl: './seance-details.component.html',
  styleUrls: ['./seance-details.component.scss']
})
export class SeanceDetailsComponent implements OnInit {

  @Input() seance!: Seance;

  @Output() selectedId: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  logoHandler(id: number | undefined): string {
    let res = ''
    switch (id) {
      case 1: res ='logan';
      break;
      case 2: res = 'spider';
      break;
      case 3: res = 'destiny';
      break;
      case 4: res = 'fryzjer';
      break;
    }
    return res;
  }

  goToPlaceSet(id: number | undefined): void {
    this.selectedId.emit(id);
  }

}
