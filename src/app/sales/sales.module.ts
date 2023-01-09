import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { CommonsComponent } from './pages/commons/commons.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { SortComponent } from './pages/sort/sort.component';

import { FlyPipe } from './pipes/fly.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { UppercasePipe } from './pipes/customUppercase.pipe';

@NgModule({
  declarations: [
    CommonsComponent,
    NoCommonsComponent,
    NumbersComponent,
    SortComponent,
    FlyPipe,
    SortingPipe,
    UppercasePipe
  ],
  exports: [
    CommonsComponent,
    NoCommonsComponent,
    NumbersComponent,
    SortComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
})
export class SalesModule {}
