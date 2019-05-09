import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsageModel} from '../../lesmodeles/usage.model';
import {ActivatedRoute} from '@angular/router';
import {UsagesService} from '../../lesservices/usages.service';

@Component({
  selector: 'app-edit-usage',
  templateUrl: './edit-usage.component.html',
  styleUrls: ['./edit-usage.component.css']
})
export class EditUsageComponent implements OnInit {

  lists:UsageModel[]
  idUsages:number
  donneUser:UsageModel
  constructor(private  http:HttpClient, private  activeRoute:ActivatedRoute, private  usageserice:UsagesService) {
    this.idUsages = activeRoute.snapshot.params['id']
  }

  ngOnInit() {
    this.usageserice.getUser(this.idUsages)
      .subscribe((data:any)=>{
        this.donneUser = data;
      })
  }

  getAll(){
    this.http.get("http://localhost:8080/users/listeUsers")
      .subscribe((data:any)=>{
        this.lists=data;
      },error1 => {
        console.log(error1)
      })
  }

  upUsers(){
    this.usageserice.updateUser(this.donneUser)
      .subscribe(data=>{
        alert("Mise à jour effectuée!!")
        this.getAll();
      })
  }
}
