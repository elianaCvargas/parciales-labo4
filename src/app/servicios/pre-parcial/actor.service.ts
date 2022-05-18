import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/paises';
import { Documento } from 'src/app/clases/documento';

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

  getAllActor(): Observable<Documento<Actor>[]> {
    return this.firestore
      .collection<Actor>('actor', (ref) =>
        ref)
      .snapshotChanges()
      .pipe(
        map((results: DocumentChangeAction<Actor>[]) => {
          return results.map((result) => {
            var data = result.payload.doc.data();

            return {
              id: result.payload.doc.id,
              data: {
                nombre: data.nombre,
                apellido: data.apellido,
                email: data.email,
                nacionalidad: data.nacionalidad
              } as Actor,
            };
          })

        })
      );
  }
}
