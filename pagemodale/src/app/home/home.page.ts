import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {PagemodalePage} from '../pagemodale/pagemodale.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
dataATransmettre: string;
reponse: number;
  constructor(public modalCtrl: ModalController) {}
// méthode openModale()
async openModale()
{
  const modal = await this.modalCtrl.create({component: PagemodalePage, componentProps: {dataEnvoyees: this.dataATransmettre}});
  modal.onWillDismiss().then(dataRetuned=>{this.reponse = dataRetuned.data;});//on recupère les données du modal
  return await modal.present();
}
textOk(mess: string)
{
  this.dataATransmettre=mess;
}
}

