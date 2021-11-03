import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecettettPage } from './recettett.page';

const routes: Routes = [
  {
    path: '',
    component: RecettettPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecettettPageRoutingModule {}
