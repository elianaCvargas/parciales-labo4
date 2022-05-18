import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Pelicula } from 'src/app/clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  message: string;
  constructor(private firestore: AngularFirestore) { }


  guardarPelicula(pelicula: Pelicula) {
    return this.firestore.collection('pelicula').add({ ...pelicula });
  }

  // getAllActor(): Observable<Documento<Actor>[]> {
  //   return this.firestore
  //     .collection<Actor>('actor', (ref) =>
  //       ref)
  //     .snapshotChanges()
  //     .pipe(
  //       map((results: DocumentChangeAction<Actor>[]) => {
  //         return results.map((result) => {
  //           var data = result.payload.doc.data();

  //           return {
  //             id: result.payload.doc.id,
  //             data: {
  //               nombre: data.nombre,
  //               apellido: data.apellido,
  //               email: data.email,
  //               nacionalidad: data.nacionalidad
  //             } as Actor,
  //           };
  //         })

  //       })
  //     );
  // }
}
