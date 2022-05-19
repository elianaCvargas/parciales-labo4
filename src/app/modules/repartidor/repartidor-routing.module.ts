import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepartidorAltaComponent } from 'src/app/primer-parcial/repartidor-alta/repartidor-alta.component';

const routes: Routes = [
  { path: 'repartidor-alta', component: RepartidorAltaComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartidorRoutingModule { }
