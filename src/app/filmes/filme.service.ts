import { Ifilme, filmeDTO } from './filme.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  constructor(private client: HttpClient) {}

  getAll(): Observable<Ifilme[]> {
    return this.client.get<Ifilme[]>('https://localhost:7002/api/filme');
  }

  getId(id: number): Observable<Ifilme> {
    return this.client.get<Ifilme>(`https://localhost:7002/api/filme/${id}`);
  }

  Post(filme: filmeDTO): Observable<any> {
    return this.client.post('https://localhost:7002/api/filme', filme);
  }

  Put(id: number, filme: filmeDTO): Observable<any> {
    return this.client.put(`https://localhost:7002/api/filme/${id}`, filme);
  }

  Delete(id: number): Observable<any> {
    return this.client.delete(`https://localhost:7002/api/filme/${id}`);
  }
}
