import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotasComponent } from './notas/notas.component';
import { NovoComponent } from './notas/novo/novo.component';
import { EditarComponent } from './notas/editar/editar.component';
import { DetalhesComponent } from './notas/detalhes/detalhes.component';
import { Routes,RouterModule } from '@angular/router';


const routes:Routes =[
  {path:'notas',component :NotasComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    NotasComponent,
    NovoComponent,
    EditarComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
