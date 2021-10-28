import { Component } from '@angular/core';
//import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //attributs  propriétés

  public IMC:number;
  public categoriePoids:string;
  public poidsIdeal:number;
  public besoinsCalories:number;
  public genresPossibles = ["Homme","Femme"];
  public listeActivites = ["Nul","Faible","Moyen","Elevé", "Intense"];
  public genreSelectionne:string;
  public activite:string;
  private activiteSelectionnee:number;
  constructor() {

   
  }

  CalculerPoidsImc(taille:number, poids:number, age:number)
  {
      let sujet = new Sujet(taille, poids, age,this.genreSelectionne, this.activiteSelectionnee);
      // on estime le besoin en calories
      this.besoinsCalories=Math.round(sujet.besoinCalories());
      this.poidsIdeal = sujet.estimePoidsIdeal();
      this.IMC= sujet.getImc();

  }

  selectionGenre(genre:string)
  {
    this.genreSelectionne=genre;

  }

  selectionActivite(activite:string)
  {
    switch(activite)
    {
      case"Nul": this.activiteSelectionnee=1.2;
      break;
      case"Faible": this.activiteSelectionnee=1.4;
      break;
      case"Moyen": this.activiteSelectionnee=1.6;
      break;
      case"Elevé": this.activiteSelectionnee=1.7;
      break;
      case"Intense": this.activiteSelectionnee=1.9;
      break;
    }
  }

}

interface IPhysio{
  taille:number;
  poids:number;
  age:number;
  genre:string;
}

interface IActivite{
  activite:number;
}

class CalculCalories{
  private metabolismeMoyen:number;
  
  constructor(genre:string,poids:number,taille:number,age:number)
  {
      if (genre=="Homme")
          this.metabolismeMoyenHomme(poids,taille,age);
      else 
          this.metabolismeMoyenFemme(poids,taille,age);
  }
  private metabolismeMoyenHomme(poids:number,taille:number,age:number)
  {
      this.metabolismeMoyen = (9.99 * poids) +(6.25 * taille) - (5*age) + 5;
  }
  private metabolismeMoyenFemme(poids:number,taille:number,age:number)
  {
      this.metabolismeMoyen= (9.99 * poids) +(6.25 * taille) - (5*age) - 161;
  }
  
  public getMetabolismeMoyen():number{return this.metabolismeMoyen;}
  }

  class PoidsIdeal{

    private poidsIdeal:number;
    private taille:number;
    //private poids:number;
    //private imc;

  constructor(genre:string, _taille:number, /*_poids:number*/){
    this.taille=_taille;
    //this.poids=_poids;
    if (genre=="Homme")
      this.PoidsIdealHomme();
    else 
      this.PoidsIdealFemme();
  }

  private PoidsIdealHomme()
  {
    let poidsDevineH:number;
    let poidsLorentzH:number;

    poidsLorentzH = (this.taille-100) - ((this.taille-150)/4);
    poidsDevineH = 50 +(2.3 *(( this.taille-152.4)/2.54));
	  this.poidsIdeal = Math.floor(((poidsLorentzH+poidsDevineH)/2)*100)/100;

  }
  private PoidsIdealFemme()
  {    
    let poidsDevineF:number;
    let poidsLorentzF:number;
    poidsLorentzF= (this.taille-100) - ((this.taille-150)/2.5);
    poidsDevineF = 45.5 +(2.3 *(( this.taille-152.4)/2.54));
    this.poidsIdeal = Math.floor(( (poidsLorentzF+poidsDevineF)/2)*100)/100;
    

  }

  public getPoidsIdeal():number {return this.poidsIdeal;}
 
  }
  class Sujet implements IPhysio,IActivite{

    public taille:number;
    public poids:number;
    public age:number; 
    public genre:string;
    public activite:number;
    private calculMetabolisme:CalculCalories;
    private poidsIdeal:PoidsIdeal;

    constructor(_taille:number, _poids:number, _age:number, _genre:string, _activite:number)
    {      
      this.taille = _taille;
      this.poids=_poids;
      this.genre=_genre;
      this.activite=_activite;
      this.age=_age;
    }

    public besoinCalories():number
    { 
        let calculMetabolisme = new CalculCalories(this.genre, this.poids,this.taille,this.age);
        return(this.activite*calculMetabolisme.getMetabolismeMoyen());
    }

    public estimePoidsIdeal(){
      let poidsIdeal = new PoidsIdeal(this.genre,this.taille, /*this.poids*/);
      return (poidsIdeal.getPoidsIdeal());
     
    }

  public getImc():number { return (Math.floor((this.poids/(Math.pow((this.taille/100),2)))*100)/100);}


   
}
