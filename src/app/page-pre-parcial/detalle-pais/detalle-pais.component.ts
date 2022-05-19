import { Component, Input, OnInit } from '@angular/core';
import { Pais } from 'src/app/clases/paises';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {
  @Input() pais: Pais;
  constructor() { }

  ngOnInit(): void {
  }

}
