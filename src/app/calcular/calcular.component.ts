import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent {

  resultado: number=0;

  constructor(private servicio: ServicioService){

  }

  calcular={
    num1:0 ,
    num2:0
  }

  suma(): void{
    this.resultado=this.calcular.num1+this.calcular.num2;
    this.servicio.disparadorDeServicio.emit({
      data:this.resultado
    })
  }
  restar(): void{
    this.resultado=this.calcular.num1-this.calcular.num2;
    this.servicio.disparadorDeServicio.emit({
      data:this.resultado
    })
  }
  multiplicar(): void{
    this.resultado=(this.calcular.num1)*(this.calcular.num2);
    this.servicio.disparadorDeServicio.emit({
      data:this.resultado
    })
  }
  dividir(): void{
    this.resultado=(this.calcular.num1)/(this.calcular.num2);
    this.servicio.disparadorDeServicio.emit({
      data:this.resultado
    })
  }
  limpiar(): void{
    this.resultado=0;
    this.calcular.num1=0;
    this.calcular.num2=0;
    this.servicio.disparadorDeServicio.emit({
      data:this.resultado
    })
  }
}
