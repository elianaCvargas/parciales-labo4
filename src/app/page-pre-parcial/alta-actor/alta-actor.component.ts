import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {
  public registroFormulario: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registroFormulario = this.fb.group({
      nombre: ['', { validators: [Validators.required] }],
      apellido: ['', { validators: [Validators.required] }],
      pais: ['', { validators: [Validators.required] }],
      email: ['', { validators: [Validators.required, Validators.email] }],
      // password1: ['', [Validators.required, Validators.minLength(6)]],
      // password2: ['', [Validators.required]]
    });
  }

  registrar() {
    var name = this.nombre();
    var apellido = this.apellido();
    var email = this.email();
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



}
