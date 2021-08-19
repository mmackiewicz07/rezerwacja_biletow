import { reducerProvider } from './app-store/index';
import { PagesModule } from './pages/pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [],
    imports: [SharedModule, RouterModule, ReactiveFormsModule, FormsModule, PagesModule, FormsModule],
    providers: [reducerProvider],
})

export class CoreModule {}