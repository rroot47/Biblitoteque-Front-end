import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LivresModel} from '../lesmodeles/livres.model';

@Injectable()
export  class LivresService {

  namelivres:LivresModel;
  //author:LivresModel;
  lists:LivresModel[];
  constructor(private http:HttpClient){}

  saveLivres(name:String, auteur:String, nblivre:number){
    this.namelivres = new LivresModel(name,auteur, nblivre);
    return this.http.post("http://localhost:8080/livre/ajoutLivre", this.namelivres)
  }

  deleteLivre(id:number){
   return this.http.get("http://localhost:8080/livre/supprimer/?id="+id)
  }

  updateLivre(nlivre:LivresModel){
    return this.http.post("http://localhost:8080/livre/updateLivre/?id="+nlivre.idLivre, nlivre)
  }

  getLivre(id:number){
    return this.http.get("http://localhost:8080/livre/chercher/?id="+id);
  }
  getAll(){
   return this.http.get("http://localhost:8080/livre/listeComplete")
      .subscribe((data:any)=>{
        this.lists=data;
      },error1 => {
        console.log(error1)
      })
  }
  getAllid() {
    return this.http.get("http://localhost:8080/livre/listeComplete")
  }

  saveEmprunts(){
    //return this.http.post("http://localhost:8080/emprunts/ajoutunEmprunts")
  }
}
