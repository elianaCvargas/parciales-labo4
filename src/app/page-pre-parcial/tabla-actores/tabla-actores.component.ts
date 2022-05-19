import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Documento } from 'src/app/clases/documento';
import { ActorService } from 'src/app/servicios/pre-parcial/actor.service';

@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.css']
})
export class TablaActoresComponent implements OnInit {
  // @Input() actores: Actor[];
  actores: Actor[] = [];
  actoresDoc: Documento<Actor>[] = [];
  @Output() onSelectedActor: EventEmitter<Actor> = new EventEmitter<Actor>();
  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    var actor = new Actor()
    this.actorService.getAllActor().subscribe(response => {
      console.log(response)
      this.actoresDoc = response;

      for (var i = 0; i < response.length; i++) {
        this.actores.push(response[i].data);
      }
    });





  }

  devolverActor(actor: Actor) {
    this.onSelectedActor.emit(actor);
  }

}
