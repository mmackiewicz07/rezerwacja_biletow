import { environment } from './../../environments/environment';
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { reducerToken } from ".";
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    imports: [
        StoreModule.forRoot(reducerToken),
        EffectsModule.forRoot([]),
    ],
    providers: [],
    declarations: [],
})
export class AppStoreModule {}