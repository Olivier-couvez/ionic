import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElevePage } from './eleve.page';

const routes: Routes = [
  {
    path: '',
    component: ElevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElevePageRoutingModule {}
