import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculingPage } from './calculing.page';

const routes: Routes = [
  {
    path: '',
    component: CalculingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculingPageRoutingModule {}
