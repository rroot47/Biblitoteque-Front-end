export class LivresModel {

  idLivre:number;
  nom_Livre: String;
  auteur_Livre:String;
  total_Livres:number

  constructor(private nomLivre:String, private auteurLivre:String, private totalLivres:number){}

}{}
