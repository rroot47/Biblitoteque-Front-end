import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {LivresModel} from '../../lesmodeles/livres.model';
import {LivresService} from '../../lesservices/livres.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomLivre:any;
  auteurLivre:any;
  ttLivre:any
  lists:LivresModel[];
  id:any
  constructor(private http:HttpClient, private  livreservice:LivresService, private router:Router) { }


  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.http.get("http://localhost:8080/livre/listeComplete")
      .subscribe((data:any)=>{
        this.lists=data;
      },error1 => {
        console.log(error1)
      })
  }


  ajouteLivre(){
    return this.livreservice.saveLivres(this.nomLivre, this.auteurLivre, this.ttLivre)
      .subscribe((data:any)=>{
        this.getAll();
      },error1 => {
        console.log(error1)
      })
  }

  supprimerLivre(id:number) {
    this.livreservice.deleteLivre(id)
      .subscribe(data=>{
        alert("voulez vous supprimer!!!")
        this.getAll();
      })
  }

  modifierLivre(id:number){
    this.router.navigate(['editlivres',id])
  }

  chercherLivre(){
    console.log()
   this.livreservice.getLivre(this.id)
      .subscribe((data:any)=>{
        this.lists = data;
        console.log(data)
      })
  }


}
