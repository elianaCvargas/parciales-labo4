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
    const storageRef = ref(storage, 'imagenes');
    // const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
    // uploadBytes(storageRef, bytes).then((snapshot) => {
    //   console.log('Uploaded an array!');
    // });

    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }
}
