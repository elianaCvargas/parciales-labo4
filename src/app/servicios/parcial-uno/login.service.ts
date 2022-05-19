import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: AngularFireAuth) { }

  login(email: string, pass: string): Promise<any> {
    return this.auth
      .signInWithEmailAndPassword(email, pass)
      .then(res => {
        var result = res;
        return res;
      })
      .catch((err) => {
        //armar una alerta si hay  algun error en  la conexion
        return Promise.reject(err);
      });
  }
}
