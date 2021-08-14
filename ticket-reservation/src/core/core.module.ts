import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [],
    imports: [SharedModule, RouterModule, ReactiveFormsModule, FormsModule],
    providers: [],
})

export class CoreModule {}