import { Iator } from '../atores/ator.model';
import { Icinema } from '../cinemas/cinema.model';
import { Igenero } from '../generos/generos.model';

export interface filmeDTO {
  nome: string;
  noCinema: boolean;
  dataDeLancamento: Date;
  foto: string | null;
  generos: Igenero[];
  atores: Iator[];
  cinemas: Icinema[];
}
export interface Ifilme {
  id: number;
  nome: string;
  noCinema: boolean;
  dataDeLancamento: Date;
  foto: string | null;
  generos: Igenero[];
  atores: Iator[];
  cinemas: Icinema[];
}
