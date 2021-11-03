import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageinternetPageRoutingModule } from './pageinternet-routing.module';

import { PageinternetPage } from './pageinternet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageinternetPageRoutingModule
  ],
  declarations: [PageinternetPage]
})
export class PageinternetPageModule {}
