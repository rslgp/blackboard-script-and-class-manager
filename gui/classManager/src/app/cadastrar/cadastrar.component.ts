import { Component } from '@angular/core';

@Component({
  selector: 'cadastrar-roteiro',
  templateUrl: './cadastrar.component.html',
  //styleUrls: [ './responderRoteiro.component.scss' ]
})
export class CadastrarRoteiroComponent{

  aconteceuclick: boolean = false;


  adicionarNovaQuestao(event){
    console.log("aconteceu click");
    this.aconteceuclick = !this.aconteceuclick;
  }
}
