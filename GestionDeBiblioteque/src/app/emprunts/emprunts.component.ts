import { Component, OnInit } from '@angular/core';
import {LivresModel} from '../../lesmodeles/livres.model';
import {HttpClient} from '@angular/common/http';
import {LivresService} from '../../lesservices/livres.service';
import {UsagesService} from '../../lesservices/usages.service';
import {UsageModel} from '../../lesmodeles/usage.model';


@Component({
  selector: 'app-emprunts',
  templateUrl: './emprunts.component.html',
  styleUrls: ['./emprunts.component.css']
})
export class EmpruntsComponent implements OnInit {

  lists:LivresModel[];
  listsU:UsageModel[];
  id:number
  constructor(private  http:HttpClient, private  livreservice:LivresService, private  usagesservice:UsagesService) { }

  ngOnInit() {
    this.getIdLivre();
    this.getIdUsages();
  }

  getIdLivre(){
    this.livreservice.getAllid().subscribe((data:any)=>{
      this.lists = data;
    },error1 => {
      console.log(error1)
    })
  }

  getIdUsages(){
    this.usagesservice.getAllIdUser().subscribe((data:any)=>{
      this.listsU = data;
    },error1 => {
      console.log(error1)
    })
  }


  }
//+33 6 09 68 06 27
