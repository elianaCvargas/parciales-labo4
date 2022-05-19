import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { Actor } from 'src/app/clases/actor';
import { Pais, PaisDb } from 'src/app/clases/paises';
import { PaisService } from 'src/app/servicios/pais.service';
import { ActorService } from 'src/app/servicios/pre-parcial/actor.service';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {
  public registroFormulario: FormGroup;
  paisIsSelected: boolean = false;
  paises: Pais[] = [];
  pais: Pais;
  registroOK: boolean = false;
  constructor(private fb: FormBuilder, private paisesService: PaisService, private actorService: ActorService) { }

  ngOnInit(): void {
    this.registroFormulario = this.fb.group({
      nombre: ['', { validators: [Validators.required] }],
      apellido: ['', { validators: [Validators.required] }],
      email: ['', { validators: [Validators.required, Validators.email] }],
      // descripcion: ['', { validators: [Validators.required] }],
      // paisControl: ['', { validators: [Validators.required] }],


      // password1: ['', [Validators.required, Validators.minLength(6)]],
      // password2: ['', [Validators.required]]
    });

    this.paisesService.listarPaises().subscribe(data => {
      console.log(data);
      for (var i = 0; i < 11; i++) {
        var pais = new Pais();
        pais.nombre = data[i].name.common;
        pais.descripcion = data[i].name.official;
        pais.foto = data[i].flags.png
        this.paises.push(pais);
      }

    });
  }

  registrar() {
    var actor = new Actor();
    actor.nombre = this.nombre();
    actor.apellido = this.apellido();
    actor.email = this.email();
    actor.nacionalidad = this.pais.nombre;
    actor.nombrePais = this.pais.descripcion;

    // var pais = new Pais();
    // pais.descripcion = this.pais.descripcion;
    // pais.nombre = this.pais.nombre;
    // pais.foto = this.pais.foto;
    // actor.pais = pais;

    // this.actorService.guardarPais(this.pais)
    //   .then(response => {
    //     console.log({ success: response })
    //   })
    //   .catch(error => console.log(error));

    this.actorService.guardarUsuario(actor)
      .then(response => {
        console.log({ success: response });
        setTimeout(() => {
          this.registroOK = true;
          // this.route.navigate(['juego']).then(() => {
          //   location.reload()
          // });
        }, 3000);
      })
      .catch(error => console.log(error));


  }

  nombre() {
    return this.registroFormulario.controls['nombre'].value;
  }

  apellido() {
    return this.registroFormulario.controls['apellido'].value;
  }

  email() {
    return this.registroFormulario.controls['email'].value;
  }

  // paisControl() {
  //   return this.registroFormulario.controls['paisControl'].value;
  // }

  // descripcion() {
  //   return this.registroFormulario.controls['descripcion'].value;
  // }

  // bandera() {
  //   return this.registroFormulario.controls['bandera'].value;
  // }


  mostrarPais(pais: Pais) {
    this.paisIsSelected = true;
    console.log(pais);
    this.pais = pais;
  }


}
