import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './page-pre-parcial/busqueda/busqueda.component';
import { TablaPeliculaComponent } from './page-pre-parcial/busqueda/tabla-pelicula/tabla-pelicula.component';
import { ListaPeliculaComponent } from './page-pre-parcial/busqueda/lista-pelicula/lista-pelicula.component';
import { DetallePeliculaComponent } from './page-pre-parcial/busqueda/detalle-pelicula/detalle-pelicula.component';
import { MenuComponent } from './common/menu/menu.component';
import { FootComponent } from './common/foot/foot.component';
import { AltaActorComponent } from './page-pre-parcial/alta-actor/alta-actor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaPaisesComponent } from './page-pre-parcial/tabla-paises/tabla-paises.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    TablaPeliculaComponent,
    ListaPeliculaComponent,
    DetallePeliculaComponent,
    MenuComponent,
    FootComponent,
    AltaActorComponent,
    TablaPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
