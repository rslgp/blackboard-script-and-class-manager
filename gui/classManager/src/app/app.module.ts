import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatIconModule, MatDividerModule, MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotasComponent } from './notas/notas.component';
import { NovoComponent } from './notas/novo/novo.component';
import { EditarComponent } from './notas/editar/editar.component';
import { DetalhesComponent } from './notas/detalhes/detalhes.component';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule, MatIconModule, MatDividerModule, MatButtonModule,
    BrowserAnimationsModule, FormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
