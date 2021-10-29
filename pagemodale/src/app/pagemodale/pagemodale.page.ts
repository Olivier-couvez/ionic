import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pagemodale',
  templateUrl: './pagemodale.page.html',
  styleUrls: ['./pagemodale.page.scss'],
})
export class PagemodalePage implements OnInit {
  @Input() dataEnvoyees: string; // pour recevoir les données envoyées par la page mère
  nombre: number;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
async closeModal()
{
  await this.modalCtrl.dismiss(this.nombre);
}
setNb(n: number)
{
  this.nombre= n; // on recupère le nombre saisi dans la page
}
}
