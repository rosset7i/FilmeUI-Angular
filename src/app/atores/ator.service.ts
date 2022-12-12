import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { atorDTO, atorCriacaoDTO } from './ator.model';

@Injectable({
  providedIn: 'root',
})
export class AtorService {
  constructor(private client: HttpClient) {}

  getAll(): Observable<atorDTO[]> {
    return this.client.get<atorDTO[]>('https://localhost:7002/api/ator');
  }

  getId(id: number): Observable<atorDTO> {
    return this.client.get<atorDTO>(`https://localhost:7002/api/ator/${id}`);
  }

  Post(ator: atorCriacaoDTO) {
    return this.client.post('https://localhost:7002/api/ator', ator);
  }

  Put(id: number, ator: atorCriacaoDTO) {
    return this.client.put(`https://localhost:7002/api/ator/${id}`, ator);
  }

  Delete(id: number) {
    return this.client.delete(`https://localhost:7002/api/ator/${id}`);
  }
}
