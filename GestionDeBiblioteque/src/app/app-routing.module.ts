import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {EmpruntsComponent} from './emprunts/emprunts.component';
import {UsersComponent} from './users/users.component';
import {HttpClientModule} from '@angular/common/http';
import {EditLivreComponent} from './edit-livre/edit-livre.component';
import {EditUsageComponent} from './edit-usage/edit-usage.component';
import {ExemplaireLivresComponent} from './exemplaire-livres/exemplaire-livres.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'editlivres/:id', component:EditLivreComponent
  },
  {
    path:'edituser/:id', component:EditUsageComponent
  },
  {
    path:'gestionemprunts', component:EmpruntsComponent
  },
  {
    path:'usergestion', component:UsersComponent
  },
  {
    path:'exemplairelivres', component:ExemplaireLivresComponent
  },
  {
    path:'',redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule, HttpClientModule]
})
export class AppRoutingModule { }
