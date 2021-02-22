import { Injectable } from '@angular/core';
import {Veranstaltung} from './veranstaltung';

@Injectable({
  providedIn: 'root'
})
export class VeranstaltungService {

  private veranstaltungen: Veranstaltung[] = [
    {id:1, name: '', description: 'Derzeit finden leider aufgrund von Corona keinen Veranstaltungen statt', pic: '', date: ''}
  ];

  constructor() { }

  getVeranstaltungen(): Veranstaltung[] {
    return this.veranstaltungen;
  }

  getVeranstaltung(id: number): Veranstaltung {
    return this.veranstaltungen.find(va => va.id === id);
  }
}
