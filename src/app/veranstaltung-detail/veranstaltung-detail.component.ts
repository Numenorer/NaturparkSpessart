import { Component, OnInit } from '@angular/core';
import {Veranstaltung} from '../veranstaltung';
import {VeranstaltungService} from '../veranstaltung.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-veranstaltung-detail',
  templateUrl: './veranstaltung-detail.component.html',
  styleUrls: ['./veranstaltung-detail.component.css']
})
export class VeranstaltungDetailComponent implements OnInit {

  veranstaltung: Veranstaltung;

  constructor(private veranstaltungService: VeranstaltungService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const veranstaltungId = this.activatedRoute.snapshot.paramMap.get('id');
    this.veranstaltung = this.veranstaltungService.getVeranstaltung(+veranstaltungId);
  }

}
