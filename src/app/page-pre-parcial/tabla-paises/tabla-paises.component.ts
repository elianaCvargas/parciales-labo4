import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from '@angular/router';
import { Pais } from 'src/app/clases/paises';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Input() paises: Pais[];
  @Output() onSelectedPais: EventEmitter<Pais> = new EventEmitter<Pais>();
  constructor(private paisesService: PaisService) { }

  ngOnInit(): void {
    // this.paisesService.listarPaises().subscribe(data => {
    //   console.log(data);
    //   for (var i = 0; i < 11; i++) {
    //     var pais = new Pais();
    //     pais.nombre = data[i].name.common;
    //     pais.descripcion = data[i].name.official;
    //     pais.foto = data[i].flags.png
    //     this.paises.push(pais);
    //   }

    // });
  }

  devolverPais(pais: Pais) {
    this.onSelectedPais.emit(pais);
  }

}
