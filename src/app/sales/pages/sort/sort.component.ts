import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [],
})
export class SortComponent {
  isUppercase: boolean = true;
  orderBy: string = '';
  heroes: Heroe[] = [
    {
      name: 'Superman',
      flying: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      flying: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      flying: false,
      color: Color.green,
    },
    {
      name: 'Daredevil',
      flying: false,
      color: Color.red,
    },
    {
      name: 'Green lantern',
      flying: true,
      color: Color.green,
    },
  ];

  change(): void {
    this.isUppercase = !this.isUppercase;
  }

  changeOrder(value: string): void {
    this.orderBy = value;
  }
}
