import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.page.html',
  styleUrls: ['./parametres.page.scss'],
})
export class ParametresPage implements OnInit {
  @Input() valmax: string;
  @Input() mesEssais: string;
  parametres: Param;
  essais: number;
  max: number;
  constructor(public modalCtrl: ModalController) {
    this.parametres = new Param();
  }

  ngOnInit() {}
  dismiss() {
    this.modalCtrl.dismiss(this.parametres);
  }

  setNbEssais(_essais) {
    this.parametres.nbEssais = _essais;
  }
  setMax(_max) {
    this.parametres.valMax = _max;
  }
}

class Param {
  nbEssais: number;
  valMax: number;
  constructor() {
    this.nbEssais = 0;
    this.valMax = 0;
  }
}
