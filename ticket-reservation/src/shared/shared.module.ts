import {RouterModule} from '@angular/router';
import {CommonModule, DatePipe} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppMaterialModule} from './app-material.module';

@NgModule({
  imports: [CommonModule, AppMaterialModule, ReactiveFormsModule, RouterModule],
  providers: [DatePipe],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
})
export class SharedModule {}