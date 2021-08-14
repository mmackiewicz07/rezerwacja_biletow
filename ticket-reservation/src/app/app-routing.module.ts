import { MainPageComponent } from './../core/pages/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/seance-list',
    pathMatch: 'full',
  },
  {
    path: 'seance-list',
    component: MainPageComponent,
    loadChildren: () => import('../core/pages/pages.module').then((m) => m.PagesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
