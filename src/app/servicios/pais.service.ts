import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  apiPaises: string = 'https://restcountries.com/v3.1/';
  apiGithub: string = 'https://api.github.com/users/elianaCvargas';
  constructor(public http: HttpClient) { }


  public listarPaises(): Observable<any> {
    return this.http.get(this.apiPaises + 'all');
  }

  public githubGet(): Observable<any> {
    return this.http.get(this.apiGithub);
  }
}
