import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/paises';
import { Pelicula } from 'src/app/clases/pelicula';
import { PaisService } from 'src/app/servicios/pais.service';
import { ActorService } from 'src/app/servicios/pre-parcial/actor.service';
import { PeliculaService } from 'src/app/servicios/pre-parcial/pelicula.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  peliculas: Pelicula[] = [];
  pais: Pais = new Pais();
  actor: Actor;
  actorSeleccionado: Actor;
  constructor(private peliculaService: PeliculaService, private paisService: PaisService, private actorService: ActorService) { }

  ngOnInit(): void {

  }

  mostrarDetallePelicula(event: any) {
    this.actorSeleccionado = event;
    this.peliculaService.peliculasGetByActor(event.email)
      .subscribe(res => {
        console.log({ peliculas: res });
        this.peliculas = res;
      });

    this.actorService.actorGet(event.email)
      .subscribe(res => {
        this.actor = res[0];

        this.pais.descripcion = this.actor.nacionalidad;
        this.pais.nombre = this.actor.nombrePais;
      })

  }

}
