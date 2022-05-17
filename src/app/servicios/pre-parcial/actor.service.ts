import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/paises';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  message: string;
  constructor(private firestore: AngularFirestore) { }
  guardarUsuario(actor: Actor) {
    return this.firestore.collection('actor').add({ ...actor });
  }

  guardarPais(pais: Pais) {
    return this.firestore.collection('pais').add({ ...pais });
  }
}
