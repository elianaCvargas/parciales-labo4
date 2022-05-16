import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../clase/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Input() peliculasInPeliComponent: Pelicula[];
  @Output() onSelectedPelicula: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();
  constructor() { }

  ngOnInit(): void {
  }

  enviarPelicula(pelicula: Pelicula) {
    this.onSelectedPelicula.emit(pelicula);
  }

}
