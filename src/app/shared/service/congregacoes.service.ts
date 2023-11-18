// shared/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CongregacoesService {
  private jsonCongregacoesUrl = '../../../assets/json/congregacoes.json';

  constructor(private http: HttpClient) {}

  getCongregacoes(): Observable<any> {
    return this.http.get<any>(this.jsonCongregacoesUrl);
  }
}
