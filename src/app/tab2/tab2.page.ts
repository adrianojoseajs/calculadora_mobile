import { Component } from '@angular/core';
import { isNumber  } from 'util';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
valor = '0';
prontoparanovonumero = true;
valorantigo = '0';
ultimooperador = '';



PressionaBotao(num){
  console.log(num);
  


  if (isNumber(num)){
  console.log('é numero')
  if (this.prontoparanovonumero)
  this.valor = '' + num;
  else 
  this.valor += '' + num;
  this.prontoparanovonumero = false;
  }
  else if (num === 'C'){
    this.valor = '0'
    this.prontoparanovonumero = true;
  }
  else if (num === '>=|'){
    this.valor = this.valor.substring(0, this.valor.length-1)
    this.prontoparanovonumero = true;
  }
  else if (num === '='){
    if (this.ultimooperador == 'X')
    this.valor = '' + (parseInt(this.valorantigo) * parseInt(this.valor));
    if (this.ultimooperador == '-')
    this.valor = '' + (parseInt(this.valorantigo) - parseInt(this.valor));
    if (this.ultimooperador == '+')
    this.valor = '' + (parseInt(this.valorantigo) + parseInt(this.valor));
    if (this.ultimooperador == '/')
    this.valor = '' + (parseInt(this.valorantigo) / parseInt(this.valor));
    this.prontoparanovonumero = true;
    if(this.ultimooperador == 'x²')
    this.valor = '' + (parseInt(this.valor) * parseInt(this.valor));
    this.prontoparanovonumero = true;
    if(this.ultimooperador == '+/-')
    this.valor = '' + (parseInt(this.valor) / -1);
    this.prontoparanovonumero = true;


  }
  else {
    this.prontoparanovonumero = true;
    this.valorantigo = this.valor;
    this.ultimooperador = num;
  }
}


}
