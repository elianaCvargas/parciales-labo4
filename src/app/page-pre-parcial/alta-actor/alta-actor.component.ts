import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pais } from 'src/app/clases/paises';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {
  public registroFormulario: FormGroup;
  paises: Pais[] = [];
  pais: Pais;

  constructor(private fb: FormBuilder, private paisesService: PaisService) { }

  ngOnInit(): void {
    this.registroFormulario = this.fb.group({
      nombre: ['', { validators: [Validators.required] }],
      apellido: ['', { validators: [Validators.required] }],
      pais: ['', { validators: [Validators.required] }],
      email: ['', { validators: [Validators.required, Validators.email] }],
      paisControl: ['', { validators: [Validators.required] }],
      descripcion: ['', { validators: [Validators.required] }],
      bandera: ['', { validators: [Validators.required] }],

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
    var name = this.nombre();
    var apellido = this.apellido();
    var email = this.email();
    var paisControl = this.paisControl();
    var descripcion = this.descripcion();
    var bandera = this.bandera();
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

  paisControl() {
    return this.registroFormulario.controls['paisControl'].value;
  }

  descripcion() {
    return this.registroFormulario.controls['descripcion'].value;
  }

  bandera() {
    return this.registroFormulario.controls['bandera'].value;
  }


  mostrarPais(pais: Pais) {
    console.log(pais);
    this.pais = pais;
  }


}
