import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [MainPageComponent, ToolbarComponent],
    imports: [RouterModule, SharedModule, ReactiveFormsModule],
    exports: [ToolbarComponent],
})

export class PagesModule {}