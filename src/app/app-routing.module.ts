import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonsComponent } from './sales/pages/commons/commons.component';
import { NoCommonsComponent } from './sales/pages/no-commons/no-commons.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { SortComponent } from './sales/pages/sort/sort.component';

const routes: Routes = [
  {
    path: '',
    component: CommonsComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'no-commons',
    component: NoCommonsComponent
  },
  {
    path: 'sort',
    component: SortComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
