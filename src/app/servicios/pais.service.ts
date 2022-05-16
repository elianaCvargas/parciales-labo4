import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  apiPaises: string = 'https://restcountries.com/v3.1/';
  constructor(public http: HttpClient) { }


  public listarPaises(): Observable<any> {
    return this.http.get(this.apiPaises + 'all');
  }
}
