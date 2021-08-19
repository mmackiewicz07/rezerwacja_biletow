import { SeanceEffects } from './store/seance-list/seance.effect';
import { SeanceService } from './store/seance-list/seance-service';
import { SeanceDetailsComponent } from './seance-details/seance-details.component';
import { featureStoreEnum } from './../../core/app-store/featureStore.enum';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SeanceListComponent } from "./seance-list/seance-list.component";
import * as FromSeance from './store/seance.reducers'
import { EffectsModule } from '@ngrx/effects';
import { RatingModule } from 'ng-starrating';

@NgModule({
    declarations: [SeanceListComponent, SeanceDetailsComponent],
    imports: [CommonModule, SharedModule, RatingModule, StoreModule.forFeature(featureStoreEnum.seance, FromSeance.reducer), EffectsModule.forFeature([SeanceEffects])],
    providers: [SeanceService],

})
export class SeanceModule {}