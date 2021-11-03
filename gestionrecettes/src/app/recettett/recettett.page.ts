import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalculingPage } from '../calculing/calculing.page';

@Component({
  selector: 'app-recettett',
  templateUrl: './recettett.page.html',
  styleUrls: ['./recettett.page.scss'],
})
export class RecettettPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async calculing() {
       const modalcalculing = await this.modalCtrl.create({
      component: CalculingPage
       });
        modalcalculing.onDidDismiss().then((dataRetuned) => { });
    return await modalcalculing.present();
  }
}
