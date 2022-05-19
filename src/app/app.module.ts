import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './page-pre-parcial/busqueda/busqueda.component';
import { TablaPeliculaComponent } from './page-pre-parcial/busqueda/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './page-pre-parcial/busqueda/detalle-pelicula/detalle-pelicula.component';
import { MenuComponent } from './common/menu/menu.component';
import { FootComponent } from './common/foot/foot.component';
import { AltaActorComponent } from './page-pre-parcial/alta-actor/alta-actor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaPaisesComponent } from './page-pre-parcial/tabla-paises/tabla-paises.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule, } from '@angular/fire/compat/firestore';
import { AltaPeliculaComponent } from './page-pre-parcial/alta-pelicula/alta-pelicula.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { TablaActoresComponent } from './page-pre-parcial/tabla-actores/tabla-actores.component';
import { ActorPeliculaComponent } from './page-pre-parcial/actor-pelicula/actor-pelicula.component';
import { ListaPeliculaComponent } from './page-pre-parcial/lista-pelicula/lista-pelicula.component';
import { DetallePaisComponent } from './page-pre-parcial/detalle-pais/detalle-pais.component';
import { DetalleActorComponent } from './page-pre-parcial/detalle-actor/detalle-actor.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LoginComponent } from './primer-parcial/login/login.component';
import { RepartidorAltaComponent } from './primer-parcial/repartidor-alta/repartidor-alta.component';


@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    MenuComponent,
    FootComponent,
    AltaActorComponent,
    TablaPaisesComponent,
    AltaPeliculaComponent,
    TablaActoresComponent,
    ActorPeliculaComponent,
    ListaPeliculaComponent,
    DetallePaisComponent,
    DetalleActorComponent,
    LoginComponent,
    RepartidorAltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
