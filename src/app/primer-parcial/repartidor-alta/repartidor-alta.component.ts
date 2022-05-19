import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pais } from 'src/app/clases/paises';
import { Repartidor } from 'src/app/clases/repartidor';
import { PaisService } from 'src/app/servicios/pais.service';
import { RepartidorService } from 'src/app/servicios/parcial-uno/repartidor.service';

@Component({
  selector: 'app-repartidor-alta',
  templateUrl: './repartidor-alta.component.html',
  styleUrls: ['./repartidor-alta.component.css']
})
export class RepartidorAltaComponent implements OnInit {
  public registroFormulario: FormGroup;
  paisIsSelected: boolean = false;
  paises: Pais[] = [];
  pais: Pais;
  registroOK: boolean = false;
  unidadPropiaSeleccionada: string = '';
  constructor(private fb: FormBuilder, private paisesService: PaisService, private repartidorService: RepartidorService) { }

  ngOnInit(): void {
    this.registroFormulario = this.fb.group({
      nombre: ['', { validators: [Validators.required] }],
      dni: ['', { validators: [Validators.required, Validators.maxLength(9)] }],
      edad: ['', { validators: [Validators.required] }],
      capacidad: ['', { validators: [Validators.required] }],
      unidadPropia: ['', { validators: [Validators.required] }],
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
    var repartidor = new Repartidor();
    repartidor.nombre = this.nombre();
    repartidor.edad = this.edad();
    repartidor.capacidadTransporte = this.capacidad();
    repartidor.paisOrigen = this.pais.nombre;

    repartidor.unidadPropia = this.unidadPropiaSeleccionada == "yes" ? true : false;

    this.repartidorService.guardar(repartidor).then(
      res => {
        this.registroOK = true;
      }
    ).catch(error => console.log(error));

  }

  nombre() {
    return this.registroFormulario.controls['nombre'].value;
  }

  dni() {
    return this.registroFormulario.controls['dni'].value;
  }

  edad() {
    return this.registroFormulario.controls['edad'].value;
  }

  capacidad() {
    return this.registroFormulario.controls['capacidad'].value;
  }

  unidadPropia() {
    return this.registroFormulario.controls['unidadPropia'].value;
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
