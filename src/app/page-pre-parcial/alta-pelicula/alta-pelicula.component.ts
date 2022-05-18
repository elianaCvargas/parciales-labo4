import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { Documento } from 'src/app/clases/documento';
import { Pais } from 'src/app/clases/paises';
import { Pelicula } from 'src/app/clases/pelicula';
import { PaisService } from 'src/app/servicios/pais.service';
import { ActorService } from 'src/app/servicios/pre-parcial/actor.service';
import { ArchivoService } from 'src/app/servicios/pre-parcial/archivo.service';
import { PeliculaService } from 'src/app/servicios/pre-parcial/pelicula.service';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {
  public registroFormulario: FormGroup;
  paisIsSelected: boolean = false;
  actores: Actor[] = [];
  pais: Pais;
  registroOk: boolean = false;
  constructor(private fb: FormBuilder, private peliculaService: PeliculaService, private actorService: ActorService
    , private archivoService: ArchivoService) { }


  ngOnInit(): void {
    this.registroFormulario = this.fb.group({
      nombre: ['', { validators: [Validators.required] }],
      tipo: ['', { validators: [Validators.required] }],
      fecha: ['', { validators: [Validators.required] }],
      cantidad: ['', { validators: [Validators.required] }],
      foto: ['', { validators: [Validators.required] }],

    });

    // this.actorService.getAllActor()
    //   .subscribe(response => {
    //     response.forEach(actor => this.actores.push(actor.data));

    //   });

  }

  registrar() {
    var pelicula = new Pelicula();
    pelicula.cantidadPublico = this.cantidad();
    pelicula.fechaEstreno = this.fecha().toLocaleString();
    pelicula.nombre = this.nombre();
    pelicula.foto = this.foto();
    pelicula.tipo = this.tipo();
    // var archi = new File([this.foto()], "fileExample");


    // this.peliculaService.guardarPelicula(pelicula)
    //   .then(response => {
    //     console.log({ success: response });
    //     setTimeout(() => {
    //       this.registroOk = true;

    //     }, 3000);
    //   })
    //   .catch(error => console.log(error));
    // this.archivoService.subirArchivo(archi);


  }

  onChange($event: any) {

  }

  nombre() {
    return this.registroFormulario.controls['nombre'].value;
  }

  tipo() {
    return this.registroFormulario.controls['tipo'].value;
  }

  fecha() {
    return this.registroFormulario.controls['fecha'].value;
  }

  cantidad() {
    return this.registroFormulario.controls['cantidad'].value;
  }

  foto() {
    return this.registroFormulario.controls['foto'].value;
  }


  mostrarPais(pais: Pais) {
    this.paisIsSelected = true;
    console.log(pais);
    this.pais = pais;
  }

}
