import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PagemodalePage } from '../pagemodale/pagemodale.page';

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
  dataATransmettrec: number;
  dataATransmettrem: number;
  constructor(public modalCtrl: ModalController) {
    this.nbessais = 10;
    this.min = 0;
    this.max = 100;
    this.nbTentatives = 0;
    this.nombremystere = Math.floor(Math.random() * 100);
  }

  public verifPropo(proposition: number) {
    //test propo et maj variable reponse result
    this.result = 'Ok';
  }

  public nouveauJeu() {
    this.nbTentatives = 0;
    this.nombremystere = Math.floor(Math.random() * 100);
    this.result = '';
  }
  async openModale() {
    this.donneesok(this.nbTentatives, this.max);
    const modal = await this.modalCtrl.create({
      component: PagemodalePage,
      componentProps: {
        dataEnvoyeesc: this.dataATransmettrec,
        dataEnvoyeesm: this.dataATransmettrem
      },
    });
    modal.onWillDismiss().then((dataRetuned) => {
      this.nbTentatives = dataRetuned.data;
    }); //on recupère les données du modal
    return await modal.present();
  }
  donneesok(nc: number, nm: number) {
    this.dataATransmettrec = nc;
    this.dataATransmettrec = nm;
  }
}
