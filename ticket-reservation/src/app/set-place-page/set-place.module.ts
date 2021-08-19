import { PlaceService } from './store/place-select/place-service';
import { PlaceEffects } from './store/place-select/place-effects';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { RatingModule } from "ng-starrating";
import { featureStoreEnum } from "src/core/app-store/featureStore.enum";
import { SharedModule } from "src/shared/shared.module";
import { SetPlaceComponent } from "./set-place/set-place.component";
import { SummaryComponent } from './summary/summary.component';
import * as FromPlace from './store/place.reducers'

@NgModule({
    declarations: [SetPlaceComponent, SummaryComponent],
    imports: [CommonModule, SharedModule, RatingModule, StoreModule.forFeature(featureStoreEnum.place, FromPlace.reducer), EffectsModule.forFeature([PlaceEffects])],
    providers: [PlaceService],

})
export class SetPlaceModule {}