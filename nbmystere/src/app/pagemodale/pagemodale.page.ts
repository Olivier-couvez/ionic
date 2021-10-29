import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pagemodale',
  templateUrl: './pagemodale.page.html',
  styleUrls: ['./pagemodale.page.scss'],
})
export class PagemodalePage implements OnInit {
  @Input() dataEnvoyeesm: string; // pour recevoir les données envoyées par la page mère
  @Input() dataEnvoyeesc: string; // pour recevoir les données envoyées par la page mère
  nombremax: number;
  nombrecoup: number;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}
  async closeModal() {
    await this.modalCtrl.dismiss(this.nombrecoup, this.nombremax);
  }
  setNbc(nc: number) {
    this.nombrecoup = nc; // on recupère le nombre saisi dans la page
  }
  setNbm(nm: number) {
    this.nombremax = nm; // on recupère le nombre saisi dans la page
  }
}
