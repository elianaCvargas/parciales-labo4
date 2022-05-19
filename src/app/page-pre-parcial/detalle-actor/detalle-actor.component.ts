import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css']
})
export class DetalleActorComponent implements OnInit {
  @Input() actor: Actor;
  constructor() { }

  ngOnInit(): void {
  }

}
