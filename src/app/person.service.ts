import { Injectable } from '@angular/core';
import {Person} from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personen: Person[] = [
    {id:1, name: 'Hans-Peter Fuß', foto:'', wohnort: 'Langenselbold', jahrgang: 1952, engagement1: '', engagement2: ['Kreisjagdverein Gelnhausen', 'Naturlandschaft MKK', 'Mitbegründer des Naturschutzstammtisch Wächtersbach/Aufenau'], engagement3:'', engagement4: '', engagement5: '', gekommen1: ['Artenvielfalt:\n'+'Dabei geht es mir um das Verständnis der Zusammenhänge innerhalb von Lebensräumen für dort lebende Pflanzen und Tiere sowie das Verständnis über die genetische Vielfalt innerhalb der Arten.', 'Klimawandel und Biodiversität:\n'+'Artensterben und Klimawandel sind Zwillingskrisen, eng miteinander verwoben, wobei das Artensterben irreversibel ist und somit die größte Bedrohung für die Menschheit darstellt.', 'Zweckbestimmung der Jagd:\n'+'Die Zweckbestimmung der Jagd hat sich im Laufe der Geschichte ständig geändert. Der Einfluss von Klimawandel und Veränderungen der Biodiversität stellen andere Anforderungen an das Jagdwesen wie in den vergangenen Jahrzehnten. Jagd ist keine Notwendigkeit mehr. Jagd bietet einen möglichen Zugang zur Natur. Jagd braucht einen sachlichen Grund und der liegt in einer naturnahen, nachhaltigen Nutzung des Wildes. Im Mittelpunkt haben das Wild und der Lebensraum zu stehen.'], gekommen2: '', gekommen3: 'Interesse an den Zusammenhängen in der Natur', verPunkte1: ['Fritz Dänner'], verPunkte2: '', taetigkeit1: ['Engagement mit Leidenschaft für bestimmte Zielsetzungen und Inhalte.'], taetigkeit2: ''},
    {id:2, name: 'Jürgen Weisbecker', foto: '', wohnort: 'Bad Orb', jahrgang: 1960, engagement1: '', engagement2: ['FSV Bad Orb seit 1995', 'NVSG Bad Orb seit 2018', 'Mitarbeit beim Stadtleitbild Bad Orb beim Projekt P19: Die Gemarkung pflegen, den Naturschutz fördern und die Renaturierung der örtlichen Bäche durchführen.'], engagement3: '',engagement4: '', engagement5: '', gekommen1: [], gekommen2: 'Mein eigenes Projekt mit der Projektgruppe des Stadtleitbildes, die Streuobstwiesen in und um Bad Orb zu erhalten. Das Kulturgut Streuobstwiesen ist in aller Munde, aber der Rückgang der genutzten Streuobstwiesen ist auch in unserem Gebiet sehr stark. Hier möchte ich einen Beitrag leisten, damit von der Bevölkerung das Kulturgut wieder angenommen wird.', gekommen3: '', verPunkte1: ['Streuobstwiesen', 'Landschaftspflegeverband Main-Kinzig-Kreis: Barbara Fiselius und Maren Nowak'], verPunkte2: '', taetigkeit1: ['Teil einer Gemeinschaft zu sein.', 'Eine sinnvolle Tätigkeit als Ausgleich zum Job.', 'Gutes tun und dabei Spaß haben.'], taetigkeit2: ''},
    {id:3, name: 'Rudolf "Rudi" Ziegler', foto: '', wohnort: 'Gelnhausen/Höchst', jahrgang: 1948, engagement1: 'Beziehungsweise für Mensch und Natur - unterlegt von kritisch humanistischer Grundauffassung – Dürfen Menschen alles? – geboren aus kritisch hinterfragter christlicher Prägung.', engagement2: ['Naturpark Spessart', 'HGON', 'NABU: Kontakte zu verschiedenen Untergliederungen und registriert beim Landesverband zur Betreuung der Natura2000 und EU-Vogelschutzgebiete um Bad Orb', 'Vogelschutzgruppe Bad Orb', 'SDW-Biebergemünd', 'Kreisjagdverein Gelnhausen', 'einer Fischereivereinigung'], engagement3:'Und ich vertrete auf Vorschlag der HGON und des NABU Naturschutz-Belange im Jagdbeirat des MKK für 5 Jahre.', engagement4: 'Für den Naturschutz!', engagement5: 'Bei:', gekommen1: [], gekommen2: 'Mein geworden Sein in der Welt!', gekommen3: '', verPunkte1: [], verPunkte2: 'Siehe oben. \n\n'+'Blick aus verschiedenen Perspektiven auf das Geschehen des Da-Seins (hier: Mensch/Natur) erlebe ich als bereichernd, herausfordernd, spannend, macht bescheiden und ist nicht immer einfach!', taetigkeit1: [], taetigkeit2: 'Wie man dieses Tätigsein nennt ist für mich eigentlich ohne Belang. Ich möchte mein Dasein so gut als mir möglich konstruktiv ins Lebensgeschehen einbringen, so lange eben das Leben es mir erlaubt.'}
    ];

  constructor() { }

  getPersonen(): Person[] {
    return this.personen;
  }

  getPerson(id: number): Person {
    return this.personen.find(v => v.id === id);
  }
}
