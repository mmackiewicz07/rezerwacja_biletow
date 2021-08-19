import { SummaryComponent } from './set-place-page/summary/summary.component';
import { SetPlaceComponent } from './set-place-page/set-place/set-place.component';
import { MainPageComponent } from './../core/pages/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeanceListComponent } from './seance-page/seance-list/seance-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [{
        path: '',
        redirectTo: 'lista-seansow',
        pathMatch: 'full'
      }, 
      {
        path: 'lista-seansow',
        component: SeanceListComponent,
        loadChildren: () => import('../app/seance-page/seance-module').then((m) => m.SeanceModule),
      },
      {
        path: 'wybor-miejsca/:id',
        component: SetPlaceComponent,
        loadChildren: () => import('../app/set-place-page/set-place.module').then((m) => m.SetPlaceModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
