import { Component, OnInit } from '@angular/core';
import {Verband} from '../verband';
import {Verbandservice} from '../verbandservice';
import {ActivatedRoute} from '@angular/router';
import {Veranstaltung} from '../veranstaltung';
import {VeranstaltungService} from '../veranstaltung.service';
import {Kontakt} from '../kontakt';
import {KontaktService} from '../kontakt.service';

@Component({
  selector: 'app-verband-detail',
  templateUrl: './verband-detail.component.html',
  styleUrls: ['./verband-detail.component.css']
})
export class VerbandDetailComponent implements OnInit {

  verband: Verband;
  veranstaltung: Veranstaltung;
  kontakt: Kontakt;

  constructor(private siteService: Verbandservice, private activatedRoute: ActivatedRoute, private veranstaltunService: VeranstaltungService, private kontaktService: KontaktService) { }

  ngOnInit(): void {
    const verbandId = this.activatedRoute.snapshot.paramMap.get('id');
    this.verband = this.siteService.getVerband(+verbandId);

    const veranstaltungId = this.activatedRoute.snapshot.paramMap.get('id');
    this.veranstaltung = this.veranstaltunService.getVeranstaltung(+veranstaltungId);

    const kontaktId = this.activatedRoute.snapshot.paramMap.get('id');
    this.kontakt = this.kontaktService.getKontakt(+kontaktId);
  }

}
