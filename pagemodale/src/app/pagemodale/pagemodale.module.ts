import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagemodalePageRoutingModule } from './pagemodale-routing.module';

import { PagemodalePage } from './pagemodale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagemodalePageRoutingModule
  ],
  declarations: [PagemodalePage]
})
export class PagemodalePageModule {}
