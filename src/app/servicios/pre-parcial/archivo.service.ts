import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { finalize, Observable } from 'rxjs';
import { FileUpload } from 'src/app/clases/fileUpload';
import { getStorage, ref, uploadBytes } from "firebase/storage";
// import { getStorage, ref, uploadBytes } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {

  private basePath = '/uploads';
  constructor(private db: AngularFireDatabase, private storage: AngularFirestore) { }

  public subirArchivo(file: File) {
    const storage = getStorage();
    const storageRef = ref(storage, file.name);

    uploadBytes(storageRef, file).then((snapshot) => {
      console.log(snapshot);
    });
  }
}
