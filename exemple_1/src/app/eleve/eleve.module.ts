import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElevePageRoutingModule } from './eleve-routing.module';

import { ElevePage } from './eleve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElevePageRoutingModule
  ],
  declarations: [ElevePage]
})
export class ElevePageModule {}
