import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatIconModule, MatDividerModule, MatButtonModule } from '@angular/material';

import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotasComponent } from './notas/notas.component';
import { NovoComponent } from './notas/novo/novo.component';
import { EditarComponent } from './notas/editar/editar.component';
import { DetalhesComponent } from './notas/detalhes/detalhes.component';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResponderRoteiroComponent } from './roteiro/responder/responder.component';


/*
const routes:Routes =[
  {path:'notas',component :NotasComponent}

]
*/


@NgModule({
  declarations: [
    AppComponent,
    NotasComponent,
    NovoComponent,
    EditarComponent,
    DetalhesComponent,
    HomeComponent,
    ResponderRoteiroComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatTabsModule, MatIconModule, MatDividerModule, MatButtonModule,
    BrowserAnimationsModule, FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
