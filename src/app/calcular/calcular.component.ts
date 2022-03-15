import { isNull } from '@angular/compiler/src/output/output_ast';
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
    num1:"" ,
    num2:""
  }

  suma(): void{
    this.resultado=parseFloat(this.calcular.num1)+parseFloat(this.calcular.num2);
    this.servicio.disparadorDeServicio.emit({
      data:this.resultado
    })
  }
  restar(): void{
    this.resultado=parseFloat(this.calcular.num1)-parseFloat(this.calcular.num2);
    this.servicio.disparadorDeServicio.emit({
      data:this.resultado
    })
  }
  multiplicar(): void{
    this.resultado=parseFloat(this.calcular.num1)*parseFloat(this.calcular.num2);
    this.servicio.disparadorDeServicio.emit({
      data:this.resultado
    })
  }
  dividir(): void{
    this.resultado=parseFloat(this.calcular.num1)/parseFloat(this.calcular.num2);
    this.servicio.disparadorDeServicio.emit({
      data:this.resultado
    })
  }
  limpiar(): void{
    this.resultado=0;
    this.calcular.num1="";
    this.calcular.num2="";
    this.servicio.disparadorDeServicio.emit({
      data:this.resultado
    })
  }
}
