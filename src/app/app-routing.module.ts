import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorPeliculaComponent } from './page-pre-parcial/actor-pelicula/actor-pelicula.component';
import { AltaActorComponent } from './page-pre-parcial/alta-actor/alta-actor.component';
import { AltaPeliculaComponent } from './page-pre-parcial/alta-pelicula/alta-pelicula.component';
import { BusquedaComponent } from './page-pre-parcial/busqueda/busqueda.component';
import { TablaPeliculaComponent } from './page-pre-parcial/busqueda/tabla-pelicula/tabla-pelicula.component';
import { BienvenidaComponent } from './primer-parcial/bienvenida/bienvenida.component';
import { LoginComponent } from './primer-parcial/login/login.component';
import { RepartidorAltaComponent } from './primer-parcial/repartidor-alta/repartidor-alta.component';

const routes: Routes = [
  // { path: 'busqueda', component: BusquedaComponent },
  // { path: 'actor/alta-actor', component: AltaActorComponent },
  // { path: 'pelicula/alta-pelicula', component: AltaPeliculaComponent },
  // { path: 'actor-pelicula', component: ActorPeliculaComponent },
  { path: 'repartidor', loadChildren: () => import('./modules/repartidor/repartidor-routing.module').then(m => m.RepartidorRoutingModule) },



  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'repartidor-alta', component: RepartidorAltaComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
