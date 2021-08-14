import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [],
    imports: [RouterModule, SharedModule, ReactiveFormsModule],
    exports: [],
})

export class PagesModule {}