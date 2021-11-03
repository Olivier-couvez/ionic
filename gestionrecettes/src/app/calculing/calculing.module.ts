import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculingPageRoutingModule } from './calculing-routing.module';

import { CalculingPage } from './calculing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculingPageRoutingModule
  ],
  declarations: [CalculingPage]
})
export class CalculingPageModule {}
