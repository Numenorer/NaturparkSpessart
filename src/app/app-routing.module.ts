import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {VerbandComponent} from './verband-liste/verband.component';
import {VeranstaltungListeComponent} from './veranstaltung-liste/veranstaltung-liste.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import {VerbandDetailComponent} from './verband-detail/verband-detail.component';
import {VeranstaltungDetailComponent} from './veranstaltung-detail/veranstaltung-detail.component';
import {HomeComponent} from './home/home.component';
import {InfoComponent} from './info/info.component';
import {MachMitComponent} from './mach-mit/mach-mit.component';
import {DatenschutzComponent} from './datenschutz/datenschutz.component';
import {MenschenComponent} from './menschen/menschen.component';
import {MenschenDetailComponent} from './menschen-detail/menschen-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'info', component: InfoComponent},
  {path: 'info/machMit', component: MachMitComponent},
  {path: 'verband', component: VerbandComponent},
  {path: 'verband/:id', component: VerbandDetailComponent},
  {path: 'veranstaltung', component: VeranstaltungListeComponent, children: [
      {path: '', redirectTo: 'veranstaltung', pathMatch: 'full'},
      {path: 'veranstaltungDetail', component: VeranstaltungDetailComponent}
    ]},
  {path: 'machMit', component: MachMitComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'impressum/datenschutz', component: DatenschutzComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'menschen', component: MenschenComponent},
  {path: 'menschen/:id', component: MenschenDetailComponent},
  {path: 'info/menschen/:id', component: MenschenDetailComponent},
  {path: 'info/menschen', component: MenschenComponent},
  {path: 'datenschutz', component: DatenschutzComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
