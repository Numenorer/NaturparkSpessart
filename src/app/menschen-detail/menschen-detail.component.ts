import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import {PersonService} from '../person.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menschen-detail',
  templateUrl: './menschen-detail.component.html',
  styleUrls: ['./menschen-detail.component.css']
})
export class MenschenDetailComponent implements OnInit {

  person: Person;

  constructor(private personService: PersonService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const personId = this.activatedRoute.snapshot.paramMap.get('id');
    this.person = this.personService.getPerson(+personId);
  }

}
