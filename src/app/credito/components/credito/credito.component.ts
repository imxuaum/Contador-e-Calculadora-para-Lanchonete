import { Component, OnInit } from '@angular/core';
import { CreditoService } from '../../services';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {

  constructor(private credito: CreditoService) { }

  private valor:number;
  private lanche:number;
  private bebida:number;
  private doce:number;

  ngOnInit() {
    this.valor = 0;
    this.lanche = 0;
    this.bebida = 0;
    this.doce = 0;
  }

  calcula(valorRecebido:number, pedido:number){
    this.valor = this.credito.somar(this.valor,valorRecebido);
    if(pedido == 1){
      this.lanche = this.lanche+1;
    }
    if(pedido == 2){
      this.bebida = this.bebida+1;
    }
    if(pedido == 3){
      this.doce = this.doce+1;
    }
  }

  get pegaValor(){
    return this.valor;
  }
  get pegaLanche(){
    return this.lanche;
  }
  get pegaBebida(){
    return this.bebida;
  }
  get pegaDoce(){
    return this.lanche;
  }

}
