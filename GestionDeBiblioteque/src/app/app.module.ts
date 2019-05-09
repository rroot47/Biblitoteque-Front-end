import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { EmpruntsComponent } from './emprunts/emprunts.component';
import { ExemplaireLivresComponent } from './exemplaire-livres/exemplaire-livres.component';
import {LivresService} from '../lesservices/livres.service';
import { EditLivreComponent } from './edit-livre/edit-livre.component';
import {UsagesService} from '../lesservices/usages.service';
import { EditUsageComponent } from './edit-usage/edit-usage.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    EmpruntsComponent,
    ExemplaireLivresComponent,
    EditLivreComponent,
    EditUsageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LivresService, UsagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
