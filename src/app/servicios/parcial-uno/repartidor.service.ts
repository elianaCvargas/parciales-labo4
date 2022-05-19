import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Actor } from 'src/app/clases/actor';
import { Repartidor } from 'src/app/clases/repartidor';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {

  constructor(private firestore: AngularFirestore) { }

  guardar(repartidor: Repartidor) {
    return this.firestore.collection('repartidor').add({ ...repartidor });
  }
}
