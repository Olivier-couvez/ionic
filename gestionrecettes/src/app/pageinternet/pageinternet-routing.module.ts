import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageinternetPage } from './pageinternet.page';

const routes: Routes = [
  {
    path: '',
    component: PageinternetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageinternetPageRoutingModule {}
