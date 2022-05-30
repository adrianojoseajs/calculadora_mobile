import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  numero1 : number = 0;
  numero2 : number = 0;
  operacao : string = '' ;
  resultado : string = '' ;
  soma(){
    
    this.operacao = '+' ;
   

  }

  acaoBotao(operacaoParam:string){
    this.operacao = operacaoParam;
  }

  igual(){

    switch(this.operacao){
      case '+':
        this.resultado = (this.numero1 + this.numero2).toString();
        break;
        case '-':
        this.resultado = (this.numero1 - this.numero2).toString();
        break;
        case '*':
        this.resultado = (this.numero1 * this.numero2).toString();
        break;
        case '/':
        this.resultado = (this.numero1 + this.numero2).toString();
        break;
        default:
          this.resultado = 'Operacao invalida!';
    }
  }  
}
