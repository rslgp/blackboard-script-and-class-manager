import { Component } from '@angular/core';

@Component({
  selector: 'responder-roteiro',
  templateUrl: './responder.component.html',
  //styleUrls: [ './responderRoteiro.component.scss' ]
})
export class ResponderRoteiroComponent{
  visibleQuestions = [false,true,false];
  nextQuestao(event, id){
    /*
    //console.log(event.explicitOriginalTarget.attributes[0].ownerElement.parentElement.parentElement.attributes);
    var idQuestaoText = event.explicitOriginalTarget.attributes[0].ownerElement.parentElement.parentElement.attributes.name.value;
    //console.log(typeof(idQuestaoText));
    var questaoId=  idQuestaoText.split("-");
    var numero = Number(questaoId[1]);
    console.log(this.visibleQuestions[numero]);
    */
    //this.visibleQuestions[numero] = !this.visibleQuestions[numero];

    this.visibleQuestions[id] = !this.visibleQuestions[id];

    //proxima questao
    this.visibleQuestions[id+1] = !this.visibleQuestions[id+1];
  }
}
