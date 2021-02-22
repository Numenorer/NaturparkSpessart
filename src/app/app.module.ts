import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VerbandComponent } from './verband-liste/verband.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { VerbandDetailComponent } from './verband-detail/verband-detail.component';
import { VeranstaltungListeComponent } from './veranstaltung-liste/veranstaltung-liste.component';
import { VeranstaltungDetailComponent } from './veranstaltung-detail/veranstaltung-detail.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MachMitComponent } from './mach-mit/mach-mit.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { MenschenComponent } from './menschen/menschen.component';
import { MenschenDetailComponent } from './menschen-detail/menschen-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    VerbandComponent,
    ImpressumComponent,
    KontaktComponent,
    VerbandDetailComponent,
    VeranstaltungListeComponent,
    VeranstaltungDetailComponent,
    HomeComponent,
    InfoComponent,
    MachMitComponent,
    DatenschutzComponent,
    MenschenComponent,
    MenschenDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
