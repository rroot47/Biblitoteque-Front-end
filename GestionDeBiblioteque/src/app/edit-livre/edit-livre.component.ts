import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LivresService} from '../../lesservices/livres.service';
import {LivresModel} from '../../lesmodeles/livres.model';

@Component({
  selector: 'app-edit-livre',
  templateUrl: './edit-livre.component.html',
  styleUrls: ['./edit-livre.component.css']
})
export class EditLivreComponent implements OnInit {

  idLivre:number
  donneLivre:LivresModel;
  constructor(private  activeRoute:ActivatedRoute, private  livreservice:LivresService) {
      this.idLivre = activeRoute.snapshot.params['id']
  }

  ngOnInit() {
    this.livreservice.getLivre(this.idLivre)
      .subscribe((data:any)=>{
        this.donneLivre=data;
      })
  }

  upLivre(){
    this.livreservice.updateLivre(this.donneLivre)
      .subscribe(data=>{
        alert("Mise à jour effectuée!!")
        this.livreservice.getAll();
      })
  }

}
