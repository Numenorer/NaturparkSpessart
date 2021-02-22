import { Injectable } from '@angular/core';
import {Verband} from './verband';
import {Kontakt} from './kontakt';

@Injectable({
  providedIn: 'root'
})
export class KontaktService {

  private kontakte: Kontakt[] = [
    {id:1, name: 'BUND Kreisverband Main-Kinzig', anPartner: 'Bodo Delhey', adresse: 'Spessartblick 3, 63571 Gelnhausen', tel: '(06051) 887866', eMail: 'bodo.delhey@bund.net', homepage: 'www.bund-main-kinzig.de', facebook: '', instagram: ''},
    {id:2, name: 'Gesellschaft für Naturschutz und Auenentwicklung (GNA e.V.)', anPartner: 'Dipl.-Biologin Susanne Hufmann (Erste Vorstitzende)', adresse: 'Mühlstrasse 11, 63517 Rodenbach', tel: '(06184) 9933797', eMail: 'gna.aue@web.de', homepage: 'www.gna-aue.de', facebook: 'www.facebook.com/gna.aue', instagram: ''},
    {id:3, name: 'HGON e.V.', anPartner: 'Andreas Höfler', adresse: 'Gartenstraße 37, 63517 Rodenbach', tel: '(06184) 56160', eMail: 'info@hgon-mkk.de', homepage: 'www.hgon-mkk.de', facebook: 'www.facebook.com/hgonmkk', instagram: 'www.instagram.com/hgon_ev'},
    {id:4, name: 'Imkerverein Jossgrund', anPartner: '1. Vorsitzender Edwin Hagemann', adresse: 'Austr. 17, 63637 Jossgrund', tel: '(06059) 1248', eMail: 'imkerverein-jossgrund@gmx.de', homepage: '', facebook: '', instagram: ''},
    {id:5, name: 'Imkerverein Steinau e.V.', anPartner: '1. Vorsitzender und anerkannter Reinzüchter Uwe Eichholz', adresse: 'Buchstrasse 8, 36396 Steinau/Bellings', tel: '(06663) 740', eMail: 'imkerei-eichholz@t-online.de', homepage: '', facebook: '', instagram: ''},
    {id:6, name: 'Kreisbauernverband Main-Kinzig e.V.', anPartner: 'Geschäftsstelle Wächtersbach (Vorstandsvorsitzender Mark Trageser)', adresse: 'Am Sportplatz 6, 63607 Wächtersbach', tel: '(06053) 610700', eMail: 'info@kbv-main-kinzig.de', homepage: '', facebook: 'www.facebook.com/KBVMKK', instagram: ''},
    {id:7, name: 'Landfrauenverein Altengronau', anPartner: 'Ute Beringer', adresse: 'Oberdorfstr. 24, 36391 Sinntal', tel: '(06665) 560', eMail: 'ute.beringer@aol.de', homepage: 'landfrauen-schluechtern.jimdofree.com', facebook: '', instagram: ''},
    {id:8, name: 'Landschaftspflegeverband', anPartner: 'Barbara Fiselius (Geschäftsführerin)', adresse: 'Georg-Hartmann-Str. 5 – 7, 63637 Jossgrund', tel: '(06059) 906688', eMail: 'info@lpv-mkk.de', homepage: 'www.lpv-mkk.de', facebook: 'www.facebook.com/profile.php?id=100015596623757', instagram: ''},
    {id:9, name: 'Main-Kinzig-Kreis Amt für Umwelt, Naturschutz und ländlichen Raum Abteilung Landwirtschaft', anPartner: 'Christina Gebhardt', adresse: 'Zum Wartturm 11-13, 63571 Gelnhausen', tel: '(06051) 8515666', eMail: 'christina.gebhardt@mkk.de', homepage: 'www.mkk.de/de/mkk_de/aktuelles/themen_1/lernfeld_landwirtschaft/lernfeld_landwirtschaft.html', facebook: '', instagram: ''},
    {id:10, name: 'NABU-Kreisverband MKK', anPartner: '', adresse: 'Unter den Linden 17, 36381 Schlüchtern', tel: '(06661) 153704-0', eMail: '', homepage: 'www.nabu-mkk.de', facebook: '', instagram: ''},
    {id:11, name: 'Naturschutzfreunde Elm', anPartner: 'Klaus Düdder (1. Vorsitzender)', adresse: 'Lärchenstrasse 4, 36391 Sinntal-Sannerz', tel: '(06664) 402590', eMail: 'duedder@t-online.de', homepage: '', facebook: '', instagram: ''},
    {id:12, name: 'Natur- und Vogelschutzgruppe Bad Orb e.V.', anPartner: 'Vorsitzender Bertwin Dehmer', adresse: 'Quanzstr. 22, 63619 Bad Orb', tel: '(0163) 4231052', eMail: 'info@nvsg-bad-orb.de', homepage: 'www.nvsg-bad-orb.de', facebook: 'www.facebook.com/NVSGBadOrb', instagram: ''},
    {id:13, name: 'Naturpark Hessischer Spessart', anPartner: 'Fritz Dänner (Geschäftsführer)', adresse: 'Georg-Hartmann-Str. 5 – 7, 63637 Jossgrund', tel: '(06059) 906783', eMail: 'info@naturpark-hessischer-spessart.de', homepage: 'www.naturpark-hessischer-spessart.de', facebook: 'www.facebook.com/profile.php?id=100057443139421', instagram: ''},
    {id:14, name: 'Ökologische Forschungsstation Schlüchtern e.V.', anPartner: '', adresse: 'Im Kloster 5, 36381 Schlüchtern', tel: '(06661) 6712', eMail: 'info@forschung-oefs.de', homepage: 'www.forschung-oefs.de', facebook: 'www.facebook.com/forschung.oefs', instagram: ''},
    {id:15, name: 'RFC Roßbach/Biebergemünd', anPartner: 'Ralf Link (1.Vorsitzender)', adresse: 'Hauptstraße 16, 63599 Biebergemünd-Roßbach', tel: '(06050) 1686', eMail: 'ralfw.link@t-online.de', homepage: 'www.rfc-rossbach.de', facebook: 'www.facebook.com/RFC-RossbachSpessart-2576197365735934', instagram: ''},
    {id:16, name: 'Förderverein Schulbauerndorf Weichersbach e.V.', anPartner: 'Erhard Belz (2. Vorsitzender)', adresse: 'Bussardstr. 20, 36391 Sinntal', tel: '(06664) 6601', eMail: 'belz@schulbauerndorf.de', homepage: 'www.schulbauerndorf.de', facebook: 'www.facebook.com/schulbauerndorf', instagram: ''},
    {id:17, name: 'Streuobstfreunde Schöneck e.V.', anPartner: 'Werner Nussbaum', adresse: 'Taunusstrasse 17, 61137 Schöneck', tel: '(0173) 1978677', eMail: 'werner_nussbaum@web.de', homepage: 'streuobstfreunde-schoeneck.jimdofree.com/', facebook: '', instagram: ''},
    {id:18, name: 'Tier- und Naturschutz Unterer Vogelsberg e. V.', anPartner: 'Anke Feil', adresse: 'Zum Ahl 1, 63633 Birstein', tel: '(06668) 9199377', eMail: '1.Vorsitzende@tina-uvb.de', homepage: 'tina-uvb.de/', facebook: 'www.facebook.com/tinauvb', instagram: ''},
    {id:19, name: 'Turnverein 1868 e.V. Bad Orb', anPartner: '', adresse: 'Bahnhofstraße 7, 63619 Bad Orb', tel: '(06052) 1414', eMail: 'Geschaeftsstelle@tv-bad-orb.de', homepage: 'www.tv-bad-orb.de', facebook: 'www.facebook.com/tvbadorb', instagram: 'www.instagram.com/tvbadorb/'},
    {id:20, name: 'Vogelschutzgruppe Hasselroth e. V.', anPartner: 'Thomas Vehring (Kassierer)\n' + 'Monika Hruby (Jugendwartin)', adresse: 'Freigerichtstr. 18, 63594 Hasselroth-Neuenhasslau', tel: '(06055) 840388', eMail: 'info@vogelschutzgruppe-Hasselroth.de', homepage: 'Vogelschutzgruppe-Hasselroth.de', facebook: '', instagram: ''}
  ];

  constructor() { }

  getKontakte(): Kontakt[] {
    return this.kontakte;
  }

  getKontakt(id: number): Kontakt {
    return this.kontakte.find(v => v.id === id);
  }
}
