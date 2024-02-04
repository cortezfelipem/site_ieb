// shared/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CongregacoesService {
  private jsonCongregacoesUrl = '../../../assets/json/congregacoes.json';
  private urlConfig = 'http://localhost:8000/';

  constructor(private http: HttpClient) {}

  getCongregacoes(): Observable<any> {
    return this.http.get<any>(this.jsonCongregacoesUrl);
  }

  getUsers(): Observable<any> {
    console.log('aqui1')
    return this.http.get<any>(this.urlConfig + 'users');
  }
}
