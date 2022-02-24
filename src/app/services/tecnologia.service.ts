import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnologia } from '../models/tecnologias/tecnologia.model';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  private baseURL = 'http://localhost:3000';
  private endpoint = 'tecnologias';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Tecnologia[]>{
    return this.httpClient.get<Tecnologia[]>(`${this.baseURL}/${this.endpoint}`)
  }

}
