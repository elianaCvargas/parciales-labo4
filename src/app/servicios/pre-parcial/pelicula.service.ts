import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Documento } from 'src/app/clases/documento';
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

  peliculasGetByActor(email: string): Observable<Pelicula[]> {

    var peliculas = this.firestore.collection<Pelicula>('pelicula', (ref) =>
      ref
        .where('actor.email', '==', email)

    );

    return peliculas.valueChanges();
  }
}
