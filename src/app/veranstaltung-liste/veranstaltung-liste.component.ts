import { Component, OnInit } from '@angular/core';
import {Verbandservice} from '../verbandservice';
import {Veranstaltung} from '../veranstaltung';
import {VeranstaltungService} from '../veranstaltung.service';

@Component({
  selector: 'app-veranstaltung-liste',
  templateUrl: './veranstaltung-liste.component.html',
  styleUrls: ['./veranstaltung-liste.component.css']
})
export class VeranstaltungListeComponent implements OnInit {

  veranstaltung: Veranstaltung[];

  constructor(private veranstaltungsService: VeranstaltungService) { }

  ngOnInit() {

    this.veranstaltung = this.veranstaltungsService.getVeranstaltungen();
  }

}
