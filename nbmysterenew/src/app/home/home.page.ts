import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import {ParametresPage} from '../parametres/parametres.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nbMystere: number;
  nbEssais: number;
  nbTentatives: number;
  proposition: number;
  public reponse: string;
  min: number;
  max: number;
  param: Param;


  constructor(public modalCtrl: ModalController) {
    this.nbEssais=10;
    this.min=0;
    this.max=100;
    this.nbTentatives=0;
    this.nbMystere = Math.floor( (Math.random()*this.max));
    this.param = new Param();
  }

  soumettreProposition(proposition: number)
  {
      if((proposition>this.nbMystere)&&(this.nbTentatives<=this.nbEssais))
      {
        this.nbTentatives++;
        this.reponse='Trop grand. Essais numéro : ' + this.nbTentatives.toString();
      }
      if((proposition<this.nbMystere)&&(this.nbTentatives<=this.nbEssais))
      {
        this.nbTentatives++;
        this.reponse='Trop petit. Essais numéro : ' + this.nbTentatives.toString();
      }
      if((proposition===this.nbMystere)&&(this.nbTentatives<=this.nbEssais))
      {
        this.nbTentatives++;
        this.reponse='trouvé en '+ this.nbTentatives.toString() + ' essais!' ;
      }
      if(this.nbTentatives>this.nbEssais)
       {
         this.reponse='Maximum d\'essais atteint';
       }
  }

  razJeu()
  {
    this.nbEssais =10;
    this.min=0;
    this.max=100;
    this.nbTentatives=0;
    this.nbMystere = Math.floor( (Math.random()*this.max));
    this.proposition = 0;
    this.reponse='';
    this.param.valMax=this.max;
    this.param.nbEssais=this.nbEssais;
   }

  async parametres()
  {

    const modal = await this.modalCtrl.create({component: ParametresPage, componentProps:{mesEssais : this.nbEssais.toString(),
      valmax: this.max.toString()}});
    modal.onWillDismiss().then(dataRetuned=>{this.param = dataRetuned.data;});
    console.log('nbmystere',this.nbMystere);
    this. nbEssais = this.param.nbEssais;
    this.max=this.param.valMax;
    this.nbMystere = Math.floor( (Math.random()*this.max));// on regenere le nb mystere car il y a eu des changements

    return await modal.present();

  }
}
class  Param{
  nbEssais: number;
  valMax: number;
constructor(){
  this.valMax=0;
  this.nbEssais=0;
}}
