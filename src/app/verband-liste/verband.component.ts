import { Component, OnInit } from '@angular/core';
import {Verband} from '../verband';
import {Verbandservice} from '../verbandservice';
import {Veranstaltung} from '../veranstaltung';
import {VeranstaltungService} from '../veranstaltung.service';

@Component({
  selector: 'app-verband',
  templateUrl: './verband.component.html',
  styleUrls: ['./verband.component.css']
})
export class VerbandComponent implements OnInit {

  verbaende: Verband[];
  veranstaltungen: Veranstaltung[];

  constructor(private siteService: Verbandservice, private veranstaltungService: VeranstaltungService) { }

  ngOnInit() {
    this.verbaende = this.siteService.getVerbaende();
    this.veranstaltungen = this.veranstaltungService.getVeranstaltungen();
  }

}
