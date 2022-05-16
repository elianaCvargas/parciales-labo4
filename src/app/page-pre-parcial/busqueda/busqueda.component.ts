import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../clase/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  peliculasFromBusqueda: Pelicula[];
  peliculaSelected: Pelicula;
  constructor() { }

  ngOnInit(): void {
    var peli = new Pelicula();
    peli.nombre = "Zombie land";
    peli.fechaEstreno = "20/04/2020";
    peli.cantidadPublico = 15;
    peli.tipo = "Comedia";
    peli.foto = "../../fotos/av.PNG";



    var peli2 = new Pelicula();
    peli2.nombre = "Orgulllo y prejuicio";
    peli2.fechaEstreno = "20/04/2020";
    peli2.cantidadPublico = 15;
    peli2.tipo = "Romance";

    var peli3 = new Pelicula();
    peli3.nombre = "Avengers";
    peli3.fechaEstreno = "20/04/2020";
    peli3.cantidadPublico = 15;
    peli3.tipo = "Fantasia";
    this.peliculasFromBusqueda = [peli, peli2, peli3];

    // this.peliculasFromBusqueda.push(peli);
    // this.peliculasFromBusqueda.push(peli2);
    // this.peliculasFromBusqueda.push(peli3);

  }


  mostrarPelicula(pelicula: any) {
    this.peliculaSelected = pelicula;
  }

}
