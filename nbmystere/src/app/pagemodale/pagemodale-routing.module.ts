import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagemodalePage } from './pagemodale.page';

const routes: Routes = [
  {
    path: '',
    component: PagemodalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagemodalePageRoutingModule {}
