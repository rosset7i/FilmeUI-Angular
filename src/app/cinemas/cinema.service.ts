import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { cinemaDTO, Icinema } from './cinema.model';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  constructor(public client: HttpClient) {}

  getAll(): Observable<Icinema[]> {
    return this.client.get<Icinema[]>('https://localhost:7002/api/cinema');
  }

  getId(id: number): Observable<Icinema> {
    return this.client.get<Icinema>(`https://localhost:7002/api/cinema/${id}`);
  }

  Post(filme: cinemaDTO) {
    return this.client.post('https://localhost:7002/api/cinema', filme);
  }

  Put(id: number, filme: cinemaDTO) {
    return this.client.put(`https://localhost:7002/api/cinema/${id}`, filme);
  }

  Delete(id: number) {
    return this.client.delete(`https://localhost:7002/api/cinema/${id}`);
  }
}
