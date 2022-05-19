import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GihubService {

  apiGithub: string = 'https://api.github.com/users/elianaCvargas';
  constructor(public http: HttpClient) { }


  public githubGet(): Observable<any> {
    return this.http.get(this.apiGithub);
  }
}
