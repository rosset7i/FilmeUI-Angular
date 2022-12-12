import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { generoDTO, Igenero } from './generos.model';

@Injectable({
  providedIn: 'root',
})
export class GeneroService {
  constructor(private client: HttpClient) {}

  getAll(): Observable<Igenero[]> {
    return this.client.get<Igenero[]>('https://localhost:7002/api/genero');
  }

  getId(id: number): Observable<Igenero> {
    return this.client.get<Igenero>(`https://localhost:7002/api/genero/${id}`);
  }

  Post(genero: generoDTO) {
    return this.client.post('https://localhost:7002/api/genero', genero);
  }

  Put(id: number, genero: generoDTO) {
    return this.client.put(`https://localhost:7002/api/genero/${id}`, genero);
  }

  Delete(id: number) {
    return this.client.delete(`https://localhost:7002/api/genero/${id}`);
  }
}
