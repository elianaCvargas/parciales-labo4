import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaActorComponent } from './page-pre-parcial/alta-actor/alta-actor.component';
import { AltaPeliculaComponent } from './page-pre-parcial/alta-pelicula/alta-pelicula.component';
import { BusquedaComponent } from './page-pre-parcial/busqueda/busqueda.component';

const routes: Routes = [
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'actor/alta-actor', component: AltaActorComponent },
  { path: 'pelicula/alta-pelicula', component: AltaPeliculaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
