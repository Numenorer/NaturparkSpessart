import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-menschen',
  templateUrl: './menschen.component.html',
  styleUrls: ['./menschen.component.css']
})
export class MenschenComponent implements OnInit {

  personen: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personen = this.personService.getPersonen();
  }

}
