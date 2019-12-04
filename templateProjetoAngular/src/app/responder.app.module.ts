import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTabsModule, MatIconModule, MatDividerModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ResponderRoteiroComponent } from './components/roteiro/responder/responder.component';


@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, MatTabsModule, MatIconModule, MatDividerModule, MatButtonModule],
  declarations: [ ResponderRoteiroComponent ],
  bootstrap:    [ ResponderRoteiroComponent ]
})
export class AppModule { }
