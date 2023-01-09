import { Component } from '@angular/core';

@Component({
  selector: 'app-commons',
  templateUrl: './commons.component.html',
  styles: [
  ]
})
export class CommonsComponent {
  nameLower: string = 'nicolás';
  nameUpper: string = 'NICOLÁS';
  completeName: string = 'niCoLás tUTOr';

  date: Date = new Date();
}
