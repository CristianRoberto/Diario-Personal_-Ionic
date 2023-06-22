import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntradasDetallePage } from './entradas-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: EntradasDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntradasDetallePageRoutingModule {}
