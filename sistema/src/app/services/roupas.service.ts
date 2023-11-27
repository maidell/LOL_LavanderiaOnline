import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Roupa } from '../models/roupa.model';

@Injectable({
  providedIn: 'root'
})

export class RoupaService {

  BASE_URL = "http://localhost:3000/roupas/";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  listarRoupas(): Observable<Roupa[]> {
    return this.httpClient.get<Roupa[]>(this.BASE_URL, this.httpOptions);
  }

  removerRoupa(id: number): Observable<Roupa> {
    return this.httpClient.delete<Roupa>(this.BASE_URL + id,
      this.httpOptions);
  }

  inserirRoupa(roupa: Roupa): Observable<Roupa> {
    return this.httpClient.post<Roupa>(this.BASE_URL,
      JSON.stringify(roupa),
      this.httpOptions);
  }

  buscarPorId(id: number): Observable<Roupa> {
    return this.httpClient.get<Roupa>(this.BASE_URL + id,
      this.httpOptions);
  }

  alterar(roupa: Roupa): Observable<Roupa> {
    return this.httpClient.put<Roupa>(this.BASE_URL + roupa.id,
      JSON.stringify(roupa),
      this.httpOptions);
  }

}
