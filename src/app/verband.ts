import {Kontakt} from './kontakt';
import {Veranstaltung} from './veranstaltung';

export interface Verband {
  id: number;
  name: string;
  description: string;
  taetigkeit: string[];
  kontakt: Kontakt[];
  pic: string;
  veranstaltung: Veranstaltung[];
}
