import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/paises';
import { Pelicula } from 'src/app/clases/pelicula';
import { PaisService } from 'src/app/servicios/pais.service';
import { PeliculaService } from 'src/app/servicios/pre-parcial/pelicula.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  peliculas: Pelicula[] = [];
  paises: Pais[] = [];
  actorSeleccionado: Actor;
  constructor(private peliculaService: PeliculaService, private paisService: PaisService) { }

  ngOnInit(): void {

  }

  mostrarDetallePelicula(event: any) {
    this.actorSeleccionado = event;
    this.peliculaService.peliculasGetByActor(event.email)
      .subscribe(res => {
        console.log({ peliculas: res });
        this.peliculas = res;
      });

    // this.paisService.listarPaises().subscribe(data => {
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

}
