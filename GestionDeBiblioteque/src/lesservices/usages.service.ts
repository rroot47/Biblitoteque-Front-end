import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsageModel} from '../lesmodeles/usage.model';

@Injectable()
export class UsagesService {

  datauser:UsageModel
  lists:UsageModel[];
 constructor(private  http:HttpClient){}



 saveUsage(name:string, pren:string){

    this.datauser = new UsageModel(name, pren);
    return this.http.post("http://localhost:8080/users/ajouterUser",this.datauser);
 }

  getAll(){
    this.http.get("http://localhost:8080/users/listeUsers")
      .subscribe((data:any)=>{
        this.lists=data;
      },error1 => {
        console.log(error1)
      })
  }

  getUser(id:number){
    return this.http.get("http://localhost:8080/users/chercherUser/?id="+id);
  }
  updateUser(nuser:UsageModel){
   return this.http.post("http://localhost:8080/users/modifierUser/?id="+ nuser.idUsages, nuser);
  }

  deleteUser(id){
    return this.http.get("http://localhost:8080/users/supprimerUser/?id="+id)
  }

  getAllIdUser(){
   return this.http.get("http://localhost:8080/users/listeUsers")
  }
}
