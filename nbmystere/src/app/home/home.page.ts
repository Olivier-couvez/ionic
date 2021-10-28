import { Component } from '@angular/core';
import { randomInt } from 'crypto';
import { Alert } from 'selenium-webdriver';
//import { AlertController } from 'ionic-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombremystere: number;
  public result: string;
  nbessais: number;
  nbTentatives: number;
  min: number;
  max: number;
  constructor(public alertCtrl: AlertController) {
    this.nbessais = 10;
    this.min = 0;
    this.max = 100;
    this.nbTentatives = 0;
    this.nombremystere = Math.floor(Math.random() * 100);
  }

  public verifPropo(proposition: number) {
    //test propo et maj variable reponse result
    this.showAlert('imc ok');
    this.result = 'Ok';
  }

  public nouveauJeu() {
    this.nbTentatives = 0;
    this.nombremystere = Math.floor(Math.random() * 100);
    this.result = '';
  }

  showAlert(message) {
    const alert = this.alertCtrl.create({
      title: 'Atenção',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
}
