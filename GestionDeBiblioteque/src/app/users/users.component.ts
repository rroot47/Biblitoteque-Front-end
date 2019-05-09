import { Component, OnInit } from '@angular/core';
import {UsagesService} from '../../lesservices/usages.service';
import {UsageModel} from '../../lesmodeles/usage.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  nomUsages:any
  prenomUsages:any
  lists:UsageModel[];
  constructor(private http:HttpClient, private  usageservice:UsagesService, private router:Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.http.get("http://localhost:8080/users/listeUsers")
      .subscribe((data:any)=>{
        this.lists=data;
      },error1 => {
        console.log(error1)
      })
  }

  ajoutUser(){
    this.usageservice.saveUsage(this.nomUsages, this.prenomUsages)
      .subscribe(data=>{
        this.getAll();
        //console.log(data);
      })
  }

  modifierUser(id:number){
    this.router.navigate(['edituser',id])
  }

  supprimerUser(id:number){
    this.usageservice.deleteUser(id)
      .subscribe(data=>{
        alert("voulez vous supprimer!!!")
        this.getAll();
      })
  }
}
