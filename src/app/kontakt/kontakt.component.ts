import { Component, OnInit } from '@angular/core';
import {Kontakt} from '../kontakt';
import {KontaktService} from '../kontakt.service';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  kontakte: Kontakt[];

  constructor(private kontaktService: KontaktService) { }

  ngOnInit(): void {
    this.kontakte = this.kontaktService.getKontakte();
  }

}
