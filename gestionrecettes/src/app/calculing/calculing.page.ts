import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calculing',
  templateUrl: './calculing.page.html',
  styleUrls: ['./calculing.page.scss'],
})
export class CalculingPage implements OnInit {
  caramel: number;
  abrimin: number;
  abrimax: number;
  patefeuille: number;
  cuilcasso: number;
  beurre: number;
  amandes: number;
  constructor(public modalCtrl: ModalController) {
}

  ngOnInit() {
  }

  calculProportion(np: number) {
    this.caramel = 1 / 4 * np;
    this.abrimin = Math.round(10 / 4 * np);
    this.abrimax = Math.round(15 / 4 * np);
    this.patefeuille = Math.round(150 / 4 * np);
    this.cuilcasso = Math.round(1 / 4 * np);
    this.beurre = Math.round(50 / 4 * np);
    this.amandes = Math.round(1 / 4 * np);
  }
dismiss() {
    this.modalCtrl.dismiss();
  }
}
