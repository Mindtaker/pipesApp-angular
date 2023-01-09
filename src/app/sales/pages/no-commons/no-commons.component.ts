import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [],
})
export class NoCommonsComponent {
  // i18nSelect
  people = [
    {
      name: 'Nicolás',
      gender: 'male',
    },
    {
      name: 'Antonela',
      gender: 'female',
    },
  ];

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  selectedPerson = this.people[0];

  changePerson() {
    if (this.selectedPerson.gender === 'male')
      this.selectedPerson = this.people[1];
    else this.selectedPerson = this.people[0];
  }

  // i18nPlural
  clients: string[] = ['María', 'Antonela', 'Nicolás', 'Juan', 'Guadalupe'];

  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient() {
    this.clients.pop();
  }

  // KeyValue Pipe
  person = {
    name: 'Nicolás',
    age: 31,
    address: 'Córdoba, Argentina',
  };

  // JSON Pipe
  heroes = [
    {
      name: 'Superman',
      fly: true,
    },
    {
      name: 'Robin',
      fly: false,
    },
    {
      name: 'Batman',
      fly: false,
    },
  ];

  //Async Pipe
  myObservable = interval(2000);

  myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
